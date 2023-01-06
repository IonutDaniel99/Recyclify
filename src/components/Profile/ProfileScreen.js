/* eslint-disable react-native/no-raw-text */
import { View, Text, Image, TouchableOpacity, ScrollView, RefreshControl, Animated, LogBox, Dimensions, Alert } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { getCurrentUserStatistics, resetUserTotalProductsScanned } from '../../helpers/firebaseHelpers'
import { ProfileScreenStyle } from './ProfileScreenStyle'
import { firebase } from '@react-native-firebase/auth'

import { containerItemsMapper } from '../../helpers/containerItemsMapper'
import { useFocusEffect } from '@react-navigation/native'
import { FlatGrid } from 'react-native-super-grid'

import Icon from 'react-native-vector-icons/MaterialIcons'
import LinearGradient from 'react-native-linear-gradient'
import DropShadow from 'react-native-drop-shadow'
import ProfileScreenLoading from './ProfileScreenLoading'

const PorfileScreen = ({ route, navigation }) => {
  const style = ProfileScreenStyle
  const userId = firebase.auth().currentUser.uid

  const [isLoading, setIsLoading] = useState(true)
  const [userStatistics, setUserStatistics] = useState({})
  const [refreshing, setRefreshing] = React.useState(false)

  useEffect(() => {
    LogBox.ignoreAllLogs(true)
  }, [])

  const onRefresh = React.useCallback(() => {
    setRefreshing(true)
    setIsLoading(true)
    getUserDataPromise().then(() => {
      setRefreshing(false)
      setIsLoading(false)
    })
  }, [])

  const opacityAnimation = useRef(new Animated.Value(20)).current
  const opacityStyle = { translateY: opacityAnimation }

  useFocusEffect(
    React.useCallback(() => {
      Animated.timing(opacityAnimation).reset()
      Animated.timing(opacityAnimation, {
        delay: 1000,
        toValue: -100,
        duration: 2500,
        useNativeDriver: true,
      }).start()
      return () => Animated.timing(opacityAnimation).stop()
    }, [route.name]),
  )

  useEffect(() => {
    getUserDataPromise()
  }, [])

  const getUserDataPromise = () =>
    getCurrentUserStatistics(userId)
      .then((data) => {
        setUserStatistics(data.val())
      })
      .then(() => setIsLoading(false))
      .catch((e) => console.log(e))

  const computeJoinedAtDate = (date) => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    const _date = new Date(date)

    return `${months[_date.getMonth()]}/${_date.getDate()}/${_date.getFullYear()}`
  }

  const getFavoritePet = (cb) => {
    const bigElement = Object.entries(userStatistics.totalProductsScanned).sort((x, y) => y[1] - x[1])[0]
    const totalScans = Object.values(userStatistics.totalProductsScanned).reduce((partialSum, a) => partialSum + a, 0)
    const item = containerItemsMapper.find((x) => bigElement[0] === x.value)
    return cb({ totalScans: totalScans, ...item })
  }
  const resetStatistics = () => {
    setIsLoading(true)
    resetUserTotalProductsScanned(userId).then(() => {
      getUserDataPromise()
    })
  }

  const signOutUser = async () => {
    try {
      await firebase.auth().signOut()
      navigation.navigate('WelcomeScreen')
    } catch (e) {
      console.log(e)
    }
  }

  const handleResetStatistics = () => {
    Alert.alert('', 'Are you sure you want to reset account statistics?', [
      {
        text: 'Cancel',
        onPress: () => null,
        style: 'cancel',
      },
      { text: 'YES', onPress: () => resetStatistics() },
    ])
    return true
  }
  const handleLogOut = () => {
    Alert.alert('', 'Are you sure you want to log off?', [
      {
        text: 'Cancel',
        onPress: () => null,
        style: 'cancel',
      },
      { text: 'YES', onPress: () => signOutUser() },
    ])
    return true
  }

  return (
    <>
      <Animated.View style={[{ transform: [opacityStyle] }, style.DragToRefreshContainer]}>
        <Text style={style.DragToRefreshText}>Drag down to refresh!</Text>
      </Animated.View>
      <View style={style.ProfileScreenContiner}>
        {isLoading ? (
          <ProfileScreenLoading />
        ) : (
          <ScrollView
            contentContainerStyle={{
              paddingTop: '15%',
            }}
            refreshControl={
              <RefreshControl
                onRefresh={onRefresh}
                refreshing={refreshing}
              />
            }
            style={{
              marginBottom: '25%',
              paddingHorizontal: 30,
            }}
          >
            <View style={style.UserProfileContainer}>
              <View style={style.UserProfileTexts}>
                <Text style={style.UserProfileName}>{userStatistics.displayName}</Text>
                <Text style={style.ContainerDate}>Joined at {computeJoinedAtDate(userStatistics.creationTime)}</Text>
                <View style={style.greenBarProfile} />
              </View>
              {userStatistics.photoURL && (
                <Image
                  source={{ uri: userStatistics.photoURL }}
                  style={style.ProfileImage}
                />
              )}
            </View>

            <View style={style.UserFavMostContainer}>
              {getFavoritePet((cb) => (
                <View style={[{ backgroundColor: '#4F70FF' }, style.UserFavoriteTypeContainer]}>
                  <View style={style.UserFavoriteTexts}>
                    <Text style={style.UserFavoriteTextLabel}>
                      Total scans: <Text />
                      <Text
                        style={{
                          fontWeight: '700',
                          textDecorationLine: 'underline',
                        }}
                      >
                        {cb.totalScans}
                      </Text>
                    </Text>
                    <Text style={style.UserFavoriteTextNumber}>
                      Most scanned: <Text />
                      <Text
                        style={{
                          fontWeight: '700',
                          textDecorationLine: 'underline',
                        }}
                      >
                        {cb.label}
                      </Text>
                    </Text>
                  </View>
                </View>
              ))}
            </View>

            <Text style={style.ScoreboardText}>Overall, your scoreboard looks like this:</Text>
            <FlatGrid
              contentContainerStyle={{
                display: 'flex',
              }}
              data={containerItemsMapper.slice(0, 6)}
              disableScrollViewPanResponder
              disableVirtualization
              itemDimension={Dimensions.get('window').width / 4}
              renderItem={({ item }) => (
                <TouchableOpacity
                  activeOpacity={1}
                  key={item.id}
                  style={[
                    style.ProductContainer,
                    {
                      backgroundColor: item.code,
                    },
                  ]}
                >
                  <Image
                    source={item.icon}
                    style={{
                      width: 40,
                      height: 40,
                      marginBottom: 6,
                    }}
                  />
                  <Text style={{ fontSize: 16, color: '#fff', fontWeight: '600' }}>{item.label}</Text>
                  <Text style={{ fontSize: 16, color: '#fff', fontWeight: '600' }}>
                    {Object.entries(userStatistics.totalProductsScanned).map((x) => (x[0] === item.value ? x[1] : ''))}
                  </Text>
                </TouchableOpacity>
              )}
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              style={{
                marginTop: 10,
              }}
            />
            <DropShadow style={style.shadowProp}>
              <LinearGradient
                colors={['#0FAE66cc', '#1EC577cc']}
                end={{ x: 1, y: 1 }}
                start={{ x: 0, y: 0 }}
                style={style.resetStatisticsContainer}
              >
                <TouchableOpacity
                  activeOpacity={0.2}
                  onPress={() => handleResetStatistics()}
                  style={style.resetStatistics}
                >
                  <Text style={style.resetStatisticsText}>Reset Statistics</Text>
                  <Icon
                    color='#fff'
                    name='delete'
                    size={44}
                    style={style.logoutIcon}
                  />
                </TouchableOpacity>
              </LinearGradient>
            </DropShadow>
            <DropShadow style={style.shadowProp}>
              <View style={style.logOutContainer}>
                <TouchableOpacity
                  activeOpacity={0.2}
                  onPress={() => handleLogOut()}
                  style={style.logOutTouchable}
                >
                  <Text style={style.logOutText}>Log out account</Text>
                  <Icon
                    color='#000'
                    name='logout'
                    size={40}
                    style={style.logoutIcon}
                  />
                </TouchableOpacity>
              </View>
            </DropShadow>
          </ScrollView>
        )}
      </View>
    </>
  )
}
export default PorfileScreen

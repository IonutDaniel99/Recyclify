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
        console.log(data)
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
    const item = containerItemsMapper.find((x) => bigElement[0] === x.value)
    return cb({ favNumber: bigElement[1], ...item })
  }
  const resetStatistics = () => {
    console.log('d')
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
          <Text>Loading...</Text>
        ) : (
          <ScrollView
            refreshControl={
              <RefreshControl
                onRefresh={onRefresh}
                refreshing={refreshing}
              />
            }
            style={{
              marginBottom: '25%',
              paddingHorizontal: 20,
            }}
          >
            <View style={style.UserProfileContainer}>
              <View style={style.UserProfileTexts}>
                {userStatistics.photoURL && (
                  <Image
                    source={{ uri: userStatistics.photoURL }}
                    style={style.ProfileImage}
                  />
                )}
                <Text style={style.UserProfileName}>Hi, {userStatistics.displayName}!</Text>
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => handleLogOut()}
                  style={style.logOut}
                >
                  <Icon
                    color='#000000'
                    name='logout'
                    size={28}
                  />
                </TouchableOpacity>
              </View>
              <View style={style.UserProfileBadges}>
                <View style={style.ContainerBadge}>
                  <Text style={style.ContainerText}>Created At</Text>
                  <Text style={style.ContainerDate}>{computeJoinedAtDate(userStatistics.creationTime)}</Text>
                </View>
                <View style={style.ContainerBadge}>
                  <Text style={style.ContainerText}>Last Singin</Text>
                  <Text style={style.ContainerDate}>{computeJoinedAtDate(userStatistics.lastSignInTime)}</Text>
                </View>
              </View>
            </View>

            <View style={style.UserFavMostContainer}>
              {getFavoritePet((cb) =>
                cb.favNumber !== 0 ? (
                  <View style={[{ backgroundColor: cb.code }, style.UserFavoriteTypeContainer]}>
                    <Image
                      source={cb.icon}
                      style={style.UserFavoritePetIcon}
                    />
                    <View style={style.UserFavoriteTexts}>
                      <Text style={style.UserFavoriteTextLabel}>
                        Your favorite PET type is <Text />
                        <Text
                          style={{
                            fontWeight: '700',
                            textDecorationLine: 'underline',
                          }}
                        >
                          {cb.label}!
                        </Text>
                      </Text>
                      <Text style={style.UserFavoriteTextNumber}>
                        You scanned over <Text />
                        <Text
                          style={{
                            fontWeight: '700',
                            textDecorationLine: 'underline',
                          }}
                        >
                          {cb.favNumber}
                        </Text>
                        <Text /> of this type!
                      </Text>
                    </View>
                  </View>
                ) : (
                  <View style={[{ backgroundColor: '#F4F4F5' }, style.UserFavoriteTypeContainer]}>
                    <View style={style.UserFavoriteTexts}>
                      <Text style={{ fontSize: 16 }}>You don't have a favourite recycled PET</Text>
                    </View>
                  </View>
                ),
              )}
            </View>
            <Text style={style.ScoreboardText}>Overall, your scoreboard looks like this:</Text>
            <FlatGrid
              contentContainerStyle={{
                display: 'flex',
                justifyContent: 'space-between',
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
                      width: 36,
                      height: 36,
                    }}
                  />
                  <Text style={{ fontSize: 14, color: '#fff', fontWeight: '600' }}>{item.label}</Text>
                  <Text style={{ fontSize: 14, color: '#fff', fontWeight: '600' }}>
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
            <View style={style.resetStatisticsContainer}>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => handleResetStatistics()}
                style={style.resetStatistics}
              >
                <Text style={style.resetStatisticsText}>Reset Statistics</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        )}
      </View>
    </>
  )
}
export default PorfileScreen

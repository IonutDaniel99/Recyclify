/* eslint-disable react-native/no-raw-text */
import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getCurrentUserStatistics } from '../../helpers/firebaseHelpers'
import { ProfileScreenStyle } from './ProfileScreenStyle'
import { firebase } from '@react-native-firebase/auth'

import { FlatGrid } from 'react-native-super-grid'
import { containerItemsMapper } from '../../helpers/containerItemsMapper'

const PorfileScreen = () => {
  const style = ProfileScreenStyle
  const userId = firebase.auth().currentUser.uid

  const [isLoading, setIsLoading] = useState(true)

  const [userStatistics, setUserStatistics] = useState({})

  useEffect(() => {
    getCurrentUserStatistics(userId).then((data) => {
      setUserStatistics(data.val())
      setIsLoading(false)
    })
  }, [])

  const computeJoinedAtDate = (date) => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    const _date = new Date(date)
    return `${days[_date.getDay()]} ${months[_date.getMonth()]}/${_date.getDay()}/${_date.getFullYear()}`
  }

  const getFavoritePet = (cb) => {
    const bigElement = Object.entries(userStatistics.totalProductsScanned).sort((x, y) => y[1] - x[1])[0]
    const item = containerItemsMapper.find((x) => bigElement[0] === x.value)
    return cb({ favNumber: bigElement[1], ...item })
  }

  return (
    <View style={style.ProfileScreenContiner}>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <>
          <View style={style.UserProfileContainer}>
            <View style={style.UserProfileTexts}>
              <Image
                source={{ uri: userStatistics.photoURL }}
                style={style.ProfileImage}
              />
              <Text style={style.UserProfileName}>Hi, {userStatistics.displayName}!</Text>
            </View>
            <View style={style.UserProfileBadges}>
              <Text style={style.UserProfileJoinedDate}>Joined at {computeJoinedAtDate(userStatistics.creationTime)}</Text>
              <Text style={style.UserProfileJoinedDate}>Joined at {computeJoinedAtDate(userStatistics.creationTime)}</Text>
              <Text style={style.UserProfileJoinedDate}>Joined at {computeJoinedAtDate(userStatistics.creationTime)}</Text>
            </View>
          </View>
          <View style={style.UserFavMostContainer}>
            {getFavoritePet((cb) => (
              <View style={[{ backgroundColor: cb.code }, style.UserFavoriteTypeContainer]}>
                <Image
                  source={cb.icon}
                  style={style.UserFavoritePetIcon}
                />
                <View style={style.UserFavoriteTexts}>
                  <Text style={style.UserFavoriteTextLabel}>
                    Your favorite pet type is{' '}
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
                    You scanned over{' '}
                    <Text
                      style={{
                        fontWeight: '700',

                        textDecorationLine: 'underline',
                      }}
                    >
                      {cb.favNumber}
                    </Text>{' '}
                    of this type!
                  </Text>
                </View>
              </View>
            ))}
          </View>
          <Text style={style.ScoreboardText}>Overall, your scoreboard looks like this</Text>
          <FlatGrid
            data={containerItemsMapper.slice(0, 6)}
            itemDimension={90}
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
            style={style.ProductTypeZone}
          />
        </>
      )}
    </View>
  )
}
export default PorfileScreen

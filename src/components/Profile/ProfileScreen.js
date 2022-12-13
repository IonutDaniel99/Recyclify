/* eslint-disable react-native/no-raw-text */
import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getCurrentUserStatistics } from '../../helpers/firebaseHelpers'
import { ProfileScreenStyle } from './ProfileScreenStyle'
import { firebase } from '@react-native-firebase/auth'

import Bottle from '../../assets/images/AddProduct/bottle.png'
import Metal from '../../assets/images/AddProduct/can.png'
import Microchip from '../../assets/images/AddProduct/microchip.png'
import Organic from '../../assets/images/AddProduct/apple.png'
import Paper from '../../assets/images/AddProduct/document.png'
import Plastic from '../../assets/images/AddProduct/plastic.png'
import _ from 'lodash'
import { FlatGrid } from 'react-native-super-grid'

const items = [
  { label: 'Plastic', value: 'plastic', code: '#3498db', id: 1, icon: Plastic },
  { label: 'Paper', value: 'paper', code: '#2ecc71', id: 2, icon: Paper },
  { label: 'Metal', value: 'metal', code: '#95a5a6', id: 3, icon: Metal },
  { label: 'Electronic', value: 'ewaste', code: '#34495e', id: 4, icon: Microchip },
  { label: 'Glass', value: 'glass', code: '#a8ccd7', id: 5, icon: Bottle },
  { label: 'Organic', value: 'organic', code: '#e67e22', id: 6, icon: Organic },
]

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
    const item = items.find((x) => bigElement[0] === x.value)
    return cb({ favNumber: bigElement[1], ...item })
  }

  return (
    <View style={style.ProfileScreenContiner}>
      {isLoading ? (
        <Text>isLoading...</Text>
      ) : (
        <>
          <View style={style.UserProfileContainer}>
            <Image
              source={{ uri: userStatistics.photoURL }}
              style={style.ProfileImage}
            />
            <View style={style.UserProfileTexts}>
              <Text style={style.UserProfileName}>{userStatistics.displayName}</Text>
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
            data={items.slice(0, 6)}
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
                <Text style={{ fontSize: 14, color: '#fff', fontWeight: '600', marginTop: 5 }}>{item.label}</Text>
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

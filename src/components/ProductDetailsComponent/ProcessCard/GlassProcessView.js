import React from 'react'
import { Image, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'

export const GlassProcessView = ({ bgColor }) => {
  const bottle = require('../../../assets/images/LatestProducts/Glass/bottle.png')
  const smash = require('../../../assets/images/LatestProducts/Glass/smash.png')
  const sort = require('../../../assets/images/LatestProducts/Glass/sort.png')
  const casting = require('../../../assets/images/LatestProducts/Glass/casting.png')

  return (
    <View
      style={{
        height: 240,
        backgroundColor: bgColor,
        position: 'relative',
        zIndex: 20,
      }}
    >
      <Text style={{ textAlign: 'center', color: '#2D2D2Da6', fontWeight: '700', fontFamily: 'Poppins', lineHeight: 18 }}>
        Process of Glass Recycle
      </Text>
      <View style={{ display: 'flex', flexDirection: 'row' }}>
        <View style={{ width: '25%', height: '100%', display: 'flex', justifyContent: 'center', marginTop: 14 }}>
          <Image
            source={sort}
            style={{
              height: 64,
              width: 64,
              marginLeft: 5,
            }}
          />
          <Text
            numberOfLines={2}
            style={{ textAlign: 'center', color: '#474747', fontWeight: '600', fontSize: 14, marginLeft: -10 }}
          >
            Sorting
          </Text>
        </View>
        <View style={{ width: '10%', height: '100%', display: 'flex', justifyContent: 'center' }} />
        <View style={{ width: '35%', display: 'flex', justifyContent: 'space-around' }}>
          <View style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginLeft: 10 }}>
            <View style={{ marginTop: 12, display: 'flex', alignItems: 'center' }}>
              <Image
                source={smash}
                style={{
                  height: 44,
                  width: 44,
                }}
              />
              <Text
                numberOfLines={1}
                style={{ textAlign: 'center', color: '#474747', fontWeight: '600', fontSize: 14 }}
              >
                Smashing
              </Text>
            </View>
          </View>
          <View style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
            <View style={{ display: 'flex', alignItems: 'center' }}>
              <Image
                source={casting}
                style={{
                  height: 44,
                  width: 44,
                }}
              />
              <Text
                numberOfLines={1}
                style={{ textAlign: 'center', color: '#474747', fontWeight: '600', fontSize: 14 }}
              >
                Casting
              </Text>
            </View>
          </View>
        </View>
        <View style={{ width: '10%', height: '100%', display: 'flex', justifyContent: 'center' }} />
        <View style={{ width: '20%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <View style={{ paddingTop: 44 }}>
            <Image
              source={bottle}
              style={{
                height: 64,
                width: 60,
              }}
            />
          </View>
          <Text
            adjustsFontSizeToFit
            numberOfLines={2}
            style={{
              textAlign: 'center',
              color: '#474747',
              fontWeight: '600',
              marginTop: 2,
            }}
          >
            New Glass Bottle
          </Text>
        </View>
      </View>
      {/* LINES */}
      <View
        style={{
          position: 'absolute',
          minHeight: '100%',
          minWidth: '100%',
          left: 15,
          zIndex: 10,
        }}
      >
        <View
          style={{
            position: 'absolute',
            borderColor: '#232323',
            borderRightWidth: 2,
            height: 24,
            right: 21,
          }}
        />
        <View
          style={{
            position: 'absolute',
            borderColor: '#232323',
            borderBottomWidth: 2,
            width: '87%',
            right: 22,
            top: 22,
          }}
        />
        <View
          style={{
            position: 'absolute',
            borderColor: '#232323',
            borderRightWidth: 2,
            height: 35,
            left: '6%',
            top: 22,
          }}
        />
        <Icon
          color={'#232323'}
          name='caretdown'
          size={16}
          style={{ position: 'absolute', height: 35, left: '4%', top: 50 }}
        />
        <View
          style={{
            position: 'absolute',
            borderColor: '#232323',
            borderBottomWidth: 2,
            width: 26,
            left: 60,
            top: 125,
          }}
        />
        <View
          style={{
            position: 'absolute',
            borderColor: '#232323',
            borderRightWidth: 2,
            height: 54,
            left: 84,
            top: 72,
          }}
        />
        <View
          style={{
            position: 'absolute',
            borderColor: '#232323',
            borderBottomWidth: 2,
            width: 20,
            left: 84,
            top: 71,
          }}
        />
        <Icon
          color={'#232323'}
          name='caretright'
          size={16}
          style={{ position: 'absolute', height: 35, left: 95, top: 63 }}
        />
        <View
          style={{
            position: 'absolute',
            borderColor: '#232323',
            borderRightWidth: 2,
            height: 36,
            left: 142,
            top: 110,
          }}
        />
        <View
          style={{
            position: 'absolute',
            borderColor: '#232323',
            borderBottomWidth: 2,
            width: 20,
            left: 142,
            top: 146,
          }}
        />
        <Icon
          color={'#232323'}
          name='caretright'
          size={16}
          style={{ position: 'absolute', height: 35, left: 154, top: 138 }}
        />
        <View
          style={{
            position: 'absolute',
            borderColor: '#232323',
            borderBottomWidth: 2,
            width: 16,
            left: 222,
            top: 146,
          }}
        />
        <View
          style={{
            position: 'absolute',
            borderColor: '#232323',
            borderRightWidth: 2,
            height: 98,
            left: 238,
            top: 50,
          }}
        />
        <View
          style={{
            position: 'absolute',
            borderColor: '#232323',
            borderBottomWidth: 2,
            width: 48,
            left: 240,
            top: 50,
          }}
        />
        <View
          style={{
            position: 'absolute',
            borderColor: '#232323',
            borderRightWidth: 2,
            height: 18,
            left: 286,
            top: 50,
          }}
        />
        <Icon
          color={'#232323'}
          name='caretdown'
          size={16}
          style={{ position: 'absolute', height: 35, left: 279, top: 56 }}
        />
      </View>
      {/* END LINES */}
    </View>
  )
}

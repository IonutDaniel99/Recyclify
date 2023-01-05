import React from 'react'
import { Image, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'

export const MetalProcessView = ({ bgColor }) => {
  const can = require('../../../assets/images/LatestProducts/Metal/can.png')
  const melting = require('../../../assets/images/LatestProducts/Metal/fondue.png')
  const sort = require('../../../assets/images/LatestProducts/Metal/sorting.png')
  const preparation = require('../../../assets/images/LatestProducts/Metal/prep.png')
  const metalroll = require('../../../assets/images/LatestProducts/Metal/metalroll.png')

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
        Process of Metal Recycle
      </Text>
      <View style={{ display: 'flex', flexDirection: 'row' }}>
        <View style={{ width: '25%', height: '100%', display: 'flex', justifyContent: 'center', marginTop: 6 }}>
          <Image
            source={sort}
            style={{
              height: 64,
              width: 64,
            }}
          />
          <Text
            numberOfLines={2}
            style={{ textAlign: 'center', color: '#474747', fontWeight: '600', fontSize: 16, marginLeft: -16 }}
          >
            Sorting
          </Text>
        </View>
        <View style={{ width: '10%', height: '100%', display: 'flex', justifyContent: 'center' }} />
        <View style={{ width: '35%', display: 'flex', justifyContent: 'space-around' }}>
          <View style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <View style={{ marginTop: 10, display: 'flex', alignItems: 'center' }}>
              <Image
                source={preparation}
                style={{
                  height: 44,
                  width: 44,
                }}
              />
              <Text
                numberOfLines={1}
                style={{ textAlign: 'center', color: '#474747', fontWeight: '600', fontSize: 14 }}
              >
                Preparation
              </Text>
            </View>
          </View>
          <View style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
            <View style={{ marginTop: 10, display: 'flex', alignItems: 'center' }}>
              <Image
                source={melting}
                style={{
                  height: 44,
                  width: 44,
                }}
              />
              <Text
                numberOfLines={1}
                style={{ textAlign: 'center', color: '#474747', fontWeight: '600', fontSize: 14 }}
              >
                Melting
              </Text>
            </View>
          </View>
        </View>
        <View style={{ width: '10%', height: '100%', display: 'flex', justifyContent: 'center' }} />
        <View style={{ width: '20%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <View style={{ paddingTop: 40 }}>
            <Image
              source={metalroll}
              style={{
                height: 64,
                width: 64,
              }}
            />
          </View>
          <Text
            numberOfLines={2}
            style={{
              textAlign: 'center',
              color: '#474747',
              fontWeight: '600',
              marginTop: 6,
              fontSize: 14,
            }}
          >
            New Metal Roll
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
            borderRightWidth: 3,
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
            borderRightWidth: 3,
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
            width: 16,
            left: 60,
            top: 125,
          }}
        />
        <View
          style={{
            position: 'absolute',
            borderColor: '#232323',
            borderRightWidth: 2,
            height: 56,
            left: 74,
            top: 70,
          }}
        />
        <View
          style={{
            position: 'absolute',
            borderColor: '#232323',
            borderBottomWidth: 2,
            width: 20,
            left: 74,
            top: 71,
          }}
        />
        <Icon
          color={'#232323'}
          name='caretright'
          size={16}
          style={{ position: 'absolute', height: 35, left: 85, top: 63 }}
        />
        <View
          style={{
            position: 'absolute',
            borderColor: '#232323',
            borderRightWidth: 2,
            height: 46,
            left: 142,
            top: 102,
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
            width: 44,
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
            left: 282,
            top: 50,
          }}
        />
        <Icon
          color={'#232323'}
          name='caretdown'
          size={16}
          style={{ position: 'absolute', height: 35, left: 275, top: 54 }}
        />
      </View>
      {/* END LINES */}
    </View>
  )
}

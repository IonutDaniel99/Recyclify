import React from 'react'
import { Image, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'

export const PaperProcessView = ({ bgColor }) => {
  const dry = require('../../../assets/images/LatestProducts/Paper/dry.png')
  const ink = require('../../../assets/images/LatestProducts/Paper/ink.png')
  const shreed = require('../../../assets/images/LatestProducts/Paper/shreed.png')
  const scroll = require('../../../assets/images/LatestProducts/Paper/scroll.png')

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
        Process of Paper Recycle
      </Text>
      <View style={{ display: 'flex', flexDirection: 'row' }}>
        <View style={{ width: '25%', height: '100%', display: 'flex', justifyContent: 'center', marginTop: 14 }}>
          <Image
            source={shreed}
            style={{
              height: 64,
              width: 64,
              marginLeft: 5,
            }}
          />
          <Text
            numberOfLines={2}
            style={{ textAlign: 'center', color: '#474747', fontWeight: '600', fontSize: 16, marginLeft: -10 }}
          >
            Shreed
          </Text>
        </View>
        <View style={{ width: '10%', height: '100%', display: 'flex', justifyContent: 'center' }} />
        <View style={{ width: '35%', display: 'flex', justifyContent: 'space-around' }}>
          <View style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginLeft: 10 }}>
            <View style={{ marginTop: 10, display: 'flex', alignItems: 'center' }}>
              <Image
                source={ink}
                style={{
                  height: 44,
                  width: 44,
                }}
              />
              <Text
                numberOfLines={1}
                style={{ textAlign: 'center', color: '#474747', fontWeight: '600', fontSize: 14 }}
              >
                De-Inking
              </Text>
            </View>
          </View>
          <View style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
            <View style={{ marginTop: 10, display: 'flex', alignItems: 'center' }}>
              <Image
                source={dry}
                style={{
                  height: 44,
                  width: 44,
                }}
              />
              <Text
                numberOfLines={1}
                style={{ textAlign: 'center', color: '#474747', fontWeight: '600', fontSize: 14 }}
              >
                Dry
              </Text>
            </View>
          </View>
        </View>
        <View style={{ width: '10%', height: '100%', display: 'flex', justifyContent: 'center' }} />
        <View style={{ width: '20%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <View style={{ paddingTop: 40 }}>
            <Image
              source={scroll}
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
            New Paper Roll
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
            borderWidth: 1,
            height: 24,
            right: 21,
          }}
        />
        <View
          style={{
            position: 'absolute',
            borderColor: '#232323',
            borderWidth: 1,
            width: '87%',
            right: 22,
            top: 22,
          }}
        />
        <View
          style={{
            position: 'absolute',
            borderColor: '#232323',
            borderWidth: 1,
            height: 35,
            left: '6%',
            top: 22,
          }}
        />
        <Icon
          color={'#232323'}
          name='caretdown'
          size={16}
          style={{ position: 'absolute', height: 35, left: '3.75%', top: 50 }}
        />
        <View
          style={{
            position: 'absolute',
            borderColor: '#232323',
            borderWidth: 1,
            width: 26,
            left: 60,
            top: 125,
          }}
        />
        <View
          style={{
            position: 'absolute',
            borderColor: '#232323',
            borderWidth: 1,
            height: 54,
            left: 84,
            top: 72,
          }}
        />
        <View
          style={{
            position: 'absolute',
            borderColor: '#232323',
            borderWidth: 1,
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
            borderWidth: 1,
            height: 46,
            left: 142,
            top: 102,
          }}
        />
        <View
          style={{
            position: 'absolute',
            borderColor: '#232323',
            borderWidth: 1,
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
            borderWidth: 1,
            width: 16,
            left: 222,
            top: 146,
          }}
        />
        <View
          style={{
            position: 'absolute',
            borderColor: '#232323',
            borderWidth: 1,
            height: 98,
            left: 238,
            top: 50,
          }}
        />
        <View
          style={{
            position: 'absolute',
            borderColor: '#232323',
            borderWidth: 1,
            width: 44,
            left: 240,
            top: 50,
          }}
        />
        <View
          style={{
            position: 'absolute',
            borderColor: '#232323',
            borderWidth: 1,
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

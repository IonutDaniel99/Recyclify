import React from 'react'
import { Image, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'

export const PlasticProcessView = ({ bgColor }) => {
  const plasticFactory = require('../../../assets/images/LatestProducts/Plastic/industry.png')
  const melting = require('../../../assets/images/LatestProducts/Plastic/fondue.png')
  const clean = require('../../../assets/images/LatestProducts/Plastic/meter.png')
  const plastic = require('../../../assets/images/LatestProducts/Plastic/PlasticBottle.png')

  return (
    <View
      style={{
        height: 240,
        backgroundColor: bgColor,
        position: 'relative',
        zIndex: 20,
      }}
    >
      <Text style={{ textAlign: 'center', color: '#2D2D2Da6', fontWeight: '700', fontFamily: 'Poppins', lineHeight: 18, marginLeft: 32 }}>
        Process of Plastic Recycle
      </Text>
      <View style={{ display: 'flex', flexDirection: 'row', marginTop: 20 }}>
        <View style={{ width: '25%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Image
            source={plasticFactory}
            style={{
              height: 64,
              width: 64,
            }}
          />
          <Text
            numberOfLines={2}
            style={{ textAlign: 'center', color: '#474747', fontWeight: '600', fontSize: 14 }}
          >
            Plastic Factory
          </Text>
        </View>
        <View style={{ width: '20%', height: '100%', display: 'flex', justifyContent: 'center' }} />
        <View style={{ width: '20%', display: 'flex', justifyContent: 'space-between', marginLeft: -4 }}>
          <View style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
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
          <View style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Image
              source={clean}
              style={{
                height: 44,
                width: 44,
              }}
            />
            <Text
              numberOfLines={1}
              style={{ textAlign: 'center', color: '#474747', fontWeight: '600', fontSize: 14 }}
            >
              Clean
            </Text>
          </View>
        </View>
        <View style={{ width: '15%', height: '100%', display: 'flex', justifyContent: 'center' }} />
        <View style={{ width: '20%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Text
            numberOfLines={2}
            style={{
              textAlign: 'center',
              color: '#474747',
              fontWeight: '600',
              fontSize: 14,
              paddingTop: 4,
            }}
          >
            New Bottle/Bag
          </Text>
          <View style={{ paddingTop: 6 }}>
            <Image
              source={plastic}
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
            Reusable Bottle/Bag
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
            width: 284,
            right: 22,
            top: 22,
          }}
        />
        <View
          style={{
            position: 'absolute',
            borderColor: '#232323',
            borderRightWidth: 2,
            height: 36,
            left: 28,
            top: 22,
          }}
        />
        <Icon
          color={'#232323'}
          name='caretdown'
          size={16}
          style={{ position: 'absolute', height: 35, left: 21, top: 50 }}
        />
        <View
          style={{
            position: 'absolute',
            borderColor: '#232323',
            borderBottomWidth: 2,
            width: 22,
            left: 66,
            top: 120,
          }}
        />
        <View
          style={{
            position: 'absolute',
            borderColor: '#232323',
            borderRightWidth: 2,
            height: 100,
            left: 86,
            top: 70,
          }}
        />
        <View
          style={{
            position: 'absolute',
            borderColor: '#232323',
            borderBottomWidth: 2,
            width: '8%',
            left: 86,
            top: 70,
          }}
        />
        <Icon
          color={'#232323'}
          name='caretright'
          size={16}
          style={{ position: 'absolute', height: 35, left: 102, top: 63 }}
        />
        <View
          style={{
            position: 'absolute',
            borderColor: '#232323',
            borderBottomWidth: 2,
            width: '8%',
            left: 86,
            top: 170,
          }}
        />
        <Icon
          color={'#232323'}
          name='caretright'
          size={16}
          style={{ position: 'absolute', height: 35, left: 102, top: 163 }}
        />
        <View
          style={{
            position: 'absolute',
            borderColor: '#232323',
            borderBottomWidth: 2,
            width: '8%',
            left: 210,
            top: 70,
          }}
        />
        <Icon
          color={'#232323'}
          name='caretright'
          size={16}
          style={{ position: 'absolute', height: 35, left: 226, top: 63 }}
        />
        <View
          style={{
            position: 'absolute',
            borderColor: '#232323',
            borderBottomWidth: 2,
            width: '8%',
            left: 210,
            top: 170,
          }}
        />
        <Icon
          color={'#232323'}
          name='caretright'
          size={16}
          style={{ position: 'absolute', height: 35, left: 226, top: 163 }}
        />
      </View>
      {/* END LINES */}
    </View>
  )
}

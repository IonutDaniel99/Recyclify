import React from 'react'
import { Image, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'

export const OrganicProcessView = ({ bgColor }) => {
  const compost = require('../../../assets/images/LatestProducts/Organic/wheelbarrow.png')
  const soil = require('../../../assets/images/LatestProducts/Organic/soil.png')
  const smartFarm = require('../../../assets/images/LatestProducts/Organic/smartFarm.png')
  const petFood = require('../../../assets/images/LatestProducts/Organic/petFood.png')

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
        Process of Organic Recycle
      </Text>
      <View style={{ display: 'flex', flexDirection: 'row', marginTop: 20 }}>
        <View style={{ width: '25%', height: '100%', display: 'flex', justifyContent: 'center' }}>
          <Image
            source={compost}
            style={{
              height: 64,
              width: 64,
              marginLeft: 10,
            }}
          />
          <Text
            numberOfLines={2}
            style={{ textAlign: 'center', color: '#474747', fontWeight: '600', fontSize: 16 }}
          >
            Organic Container
          </Text>
        </View>
        <View style={{ width: '20%', height: '100%', display: 'flex', justifyContent: 'center' }} />
        <View style={{ width: '20%', display: 'flex', justifyContent: 'space-between', marginLeft: -10 }}>
          <View style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 10 }}>
            <Image
              source={soil}
              style={{
                height: 32,
                width: 64,
                paddingRight: 10,
              }}
            />
            <Text
              numberOfLines={1}
              style={{ textAlign: 'center', color: '#474747', fontWeight: '600', fontSize: 14 }}
            >
              Compost
            </Text>
          </View>
          <View style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Image
              source={petFood}
              style={{
                height: 44,
                width: 44,
              }}
            />
            <Text
              numberOfLines={2}
              style={{ textAlign: 'center', color: '#474747', fontWeight: '600', fontSize: 14, position: 'relative' }}
            >
              Animal Food
            </Text>
          </View>
        </View>
        <View style={{ width: '15%', height: '100%', display: 'flex', justifyContent: 'center' }} />
        <View style={{ width: '20%', display: 'flex', justifyContent: 'flex-end', alignItems: 'center', marginBottom: 6 }}>
          <View>
            <Image
              source={smartFarm}
              style={{
                height: 60,
                width: 60,
              }}
            />
          </View>
          <Text
            numberOfLines={2}
            style={{
              textAlign: 'center',
              color: '#474747',
              fontWeight: '600',
              fontSize: 16,
            }}
          >
            Fertilizer
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
            right: '6.25%',
          }}
        />
        <View
          style={{
            position: 'absolute',
            borderColor: '#232323',
            borderBottomWidth: 2,
            width: '87%',
            right: '6%',
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
            width: '8%',
            left: '17%',
            top: 120,
          }}
        />
        <View
          style={{
            position: 'absolute',
            borderColor: '#232323',
            borderRightWidth: 2,
            height: 100,
            left: '25%',
            top: 70,
          }}
        />
        <View
          style={{
            position: 'absolute',
            borderColor: '#232323',
            borderBottomWidth: 2,
            width: '8%',
            left: '25%',
            top: 70,
          }}
        />
        <Icon
          color={'#232323'}
          name='caretright'
          size={16}
          style={{ position: 'absolute', height: 35, left: '30%', top: 63 }}
        />
        <View
          style={{
            position: 'absolute',
            borderColor: '#232323',
            borderBottomWidth: 2,
            width: '8%',
            left: '25%',
            top: 170,
          }}
        />
        <Icon
          color={'#232323'}
          name='caretright'
          size={16}
          style={{ position: 'absolute', height: 35, left: '30%', top: 163 }}
        />
        <View
          style={{
            position: 'absolute',
            borderColor: '#232323',
            borderBottomWidth: 2,
            width: '22%',
            left: '60%',
            top: 70,
          }}
        />
        <View
          style={{
            position: 'absolute',
            borderColor: '#232323',
            borderRightWidth: 2,
            height: 26,
            left: '82%',
            top: 70,
          }}
        />
        <Icon
          color={'#232323'}
          name='caretdown'
          size={16}
          style={{ position: 'absolute', height: 36, left: '79.7%', top: 90 }}
        />
      </View>
      {/* END LINES */}
    </View>
  )
}

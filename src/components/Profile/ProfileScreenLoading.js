import { View } from 'react-native'
import React from 'react'
import { Fade, Placeholder, PlaceholderLine } from 'rn-placeholder'

const ProfileScreenLoading = () => {
  return (
    <View style={{ height: '100%', width: '100%', padding: 20, paddingTop: '15%' }}>
      <Placeholder Animation={Fade}>
        <Placeholder style={{ height: 200 }}>
          <PlaceholderLine height={172} />
        </Placeholder>
        <Placeholder style={{ height: 120 }}>
          <PlaceholderLine height={90} />
        </Placeholder>
        <Placeholder style={{ height: 60 }}>
          <PlaceholderLine height={40} />
        </Placeholder>
        <Placeholder style={{ height: 265 }}>
          <PlaceholderLine height={250} />
        </Placeholder>
        <Placeholder style={{ height: 100 }}>
          <PlaceholderLine height={90} />
        </Placeholder>
        <Placeholder style={{ height: 100 }}>
          <PlaceholderLine height={90} />
        </Placeholder>
      </Placeholder>
    </View>
  )
}

export default ProfileScreenLoading

import { View, Text, Image } from 'react-native'
import React from 'react'
import { Fade, Placeholder, PlaceholderLine, PlaceholderMedia } from 'rn-placeholder'

const LoadingContainer = () => {
  return (
    <View style={{ height: '100%', width: '100%', padding: 20 }}>
      <Placeholder Animation={Fade}>
        <Placeholder
          Right={() => <PlaceholderMedia size={96} />}
          style={{ marginBottom: 60 }}
        >
          <PlaceholderLine
            height={30}
            style={{ marginBottom: 10 }}
            width={70}
          />
          <PlaceholderLine
            height={20}
            width={40}
          />
          <PlaceholderLine width={40} />
        </Placeholder>

        <PlaceholderLine
          height={40}
          style={{ marginBottom: 80 }}
        />

        <Placeholder style={{ marginBottom: 20 }}>
          <PlaceholderLine height={30} />
          <PlaceholderLine height={30} />
        </Placeholder>

        <PlaceholderLine
          height={48}
          style={{ marginBottom: 80 }}
        />
        <PlaceholderLine
          height={100}
          style={{ marginBottom: 80 }}
        />
      </Placeholder>
    </View>
  )
}

export default LoadingContainer

import { Clipboard, Image, Linking, StyleSheet, Text, ToastAndroid, TouchableOpacity, View } from 'react-native'
import React from 'react'
import RelativeTimeFormat from 'relative-time-format'
import en from 'relative-time-format/locale/en.json'

const NewsCard = ({ article }) => {
  RelativeTimeFormat.addLocale(en)

  const computeDateReadable = (date) => {
    const date_1 = new Date(date)
    const date_2 = new Date()
    const difference = date_1.getTime() - date_2.getTime()
    const TotalDays = Math.ceil(difference / (1000 * 3600 * 24))
    const f = new RelativeTimeFormat('en', {
      style: 'long',
      numeric: 'auto',
    }).format(TotalDays, 'day')
    return f
  }

  const copyToClipoard = (link) => {
    Clipboard.setString(link)
    ToastAndroid.showWithGravity('Link copied to clipboard', 2, 10)
  }

  return (
    <TouchableOpacity
      onLongPress={() => copyToClipoard(article.url)}
      onPress={() => {
        Linking.openURL(article.url)
      }}
      style={style.newsCardContainer}
    >
      <View style={style.titleDescImageContainer}>
        <View style={style.titleDescSubContainer}>
          <Text
            numberOfLines={2}
            style={style.titleText}
          >
            {article.title}
          </Text>
          <Text
            numberOfLines={3}
            style={style.descText}
          >
            {article.description}
          </Text>
        </View>
        <View style={style.imageContainer}>
          {article.urlToImage && !article.urlToImage.includes('.png') ? (
            <Image
              source={{ 'uri': article.urlToImage }}
              style={{ width: undefined, height: undefined, flex: 1 }}
            />
          ) : (
            <Image
              source={require('../../assets/images/Others/noimage.png')}
              style={{ width: undefined, height: undefined, flex: 1 }}
            />
          )}
        </View>
      </View>
      <View style={style.subCardDetails}>
        <Text style={style.sourceNameText}>Source: {article.source.name}</Text>
        <Text style={style.datesAgoText}>{computeDateReadable(article.publishedAt)}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default NewsCard

const style = StyleSheet.create({
  newsCardContainer: {
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    marginBottom: 20,
    padding: 12,
    width: '100%',
  },
  titleDescImageContainer: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  titleDescSubContainer: { width: '60%' },
  titleText: {
    color: '#000',
    fontSize: 14,
  },
  descText: {
    color: '#606060',
    fontSize: 12,
  },
  imageContainer: { maxHeight: 72, maxWidth: 144, width: '40%' },
  subCardDetails: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
    marginHorizontal: 10,
    marginTop: 10,
  },
  sourceNameText: {
    color: '#000',
  },
  datesAgoText: {
    color: '#000',
  },
})

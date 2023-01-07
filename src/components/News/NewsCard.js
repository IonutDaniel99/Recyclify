import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
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

  return (
    <TouchableOpacity
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
        {article.urlToImage && !article.urlToImage.includes('.png') ? (
          <Image
            source={{ 'uri': article.urlToImage }}
            style={{ height: 80, width: 128 }}
          />
        ) : (
          <Image
            source={require('../../assets/images/Others/noimage.png')}
            style={{ height: 80, width: 128 }}
          />
        )}
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
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleDescSubContainer: { maxWidth: '70%' },
  titleText: {
    color: '#000',
    fontSize: 16,
  },
  descText: {
    color: '#606060',
    fontSize: 14,
  },
  subCardDetails: { display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10, marginVertical: 10 },
  sourceNameText: {
    color: '#000',
  },
  datesAgoText: {
    color: '#000',
  },
})

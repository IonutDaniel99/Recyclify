import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, ScrollView, Dimensions } from 'react-native'
import { firebase } from '@react-native-firebase/auth'
import { nullOrCreateCollectionsOnFirebase } from '../../helpers/firebaseHelpers'
import { getGoogleNews } from '../../helpers/googleNewsHelpers'
import { NewsScreenStyle } from './NewsScreenStyle'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Placeholder, PlaceholderLine, PlaceholderMedia, Shine } from 'rn-placeholder'
import NewsCard from './NewsCard'

const topicMapper = {
  1: 'Recycle',
  2: 'Global Warm',
  3: 'Solar Energy',
}

const NewsScreen = () => {
  const style = NewsScreenStyle

  const {
    displayName,
    email,
    emailVerified,
    phoneNumber,
    metadata: { creationTime, lastSignInTime },
    photoURL,
    uid,
  } = firebase.auth().currentUser

  const [newsCollection, setNewsCollection] = useState([])
  const [isNewsLoading, setIsNewsLoading] = useState(true)

  const [isFilterOpen, setIsFilterOpen] = useState(false)

  const [newsTopic, setNewsTopic] = useState(1)
  const [newsDate, setNewsDate] = useState(1)
  const [newsSort, setNewsSort] = useState(1)
  const [newsSize, setNewsSize] = useState(10)

  useEffect(() => {
    nullOrCreateCollectionsOnFirebase(userTemplate)
    handleSearchFilter(2)
    return () => {}
  }, [])

  const handleSearchFilter = (otherDate) => {
    setIsFilterOpen(false)
    setIsNewsLoading(true)
    getGoogleNews(topicMapper[newsTopic], otherDate || newsDate, newsSort, newsSize)
      .then((response) => response.json())
      .then((json) => {
        setNewsCollection(json.articles.slice(0, newsSize))
      })
      .finally(() => setIsNewsLoading(false))
      .catch((error) => {
        console.error(error)
      })
  }

  const userTemplate = {
    [uid]: {
      userId: uid,
      latestProductsScanned: { 0: 0 },
      totalProductsScanned: {
        ewaste: 0,
        plastic: 0,
        metal: 0,
        glass: 0,
        paper: 0,
        organic: 0,
      },
      creationTime: creationTime,
      lastSignInTime: lastSignInTime,
      photoURL: photoURL,
      email: email,
      displayName: displayName,
      emailVerified: emailVerified,
      phoneNumber: phoneNumber,
    },
  }

  return (
    <View style={style.fullScreen}>
      <View style={style.container}>
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
          <Text style={style.newsScreenTitle}>News</Text>
          <Icon
            color={'#000'}
            name={isFilterOpen ? 'filter-menu-outline' : 'filter-off-outline'}
            onPress={() => setIsFilterOpen(!isFilterOpen)}
            size={42}
            style={{ paddingRight: 20 }}
          />
        </View>
        <View
          style={{
            borderColor: '#23232366',
            borderWidth: 1,
            width: '100%',
          }}
        />
        <View
          style={{
            marginVertical: 10,
            width: '100%',
            position: 'absolute',
            backgroundColor: '#fff',
            zIndex: 30,
            marginTop: 70,
            display: isFilterOpen ? 'flex' : 'none',
          }}
        >
          <View style={style.topicAndDateContainer}>
            <Text style={style.topicDateText}>Topic:</Text>
            <TouchableOpacity
              onPress={() => setNewsTopic(1)}
              style={[
                style.topicDateButtonContainer,
                newsTopic === 1 ? style.topicDateButtonContainerChecked : style.topicDateButtonContainerNotChecked,
              ]}
            >
              <Text style={[style.topicDateButtonText, newsTopic === 1 ? style.topicDateTextChecked : style.topicDateTextNotChecked]}>
                Recycle
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setNewsTopic(2)}
              style={[
                style.topicDateButtonContainer,
                newsTopic === 2 ? style.topicDateButtonContainerChecked : style.topicDateButtonContainerNotChecked,
              ]}
            >
              <Text style={[style.topicDateButtonText, newsTopic === 2 ? style.topicDateTextChecked : style.topicDateTextNotChecked]}>
                Global Warm
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setNewsTopic(3)}
              style={[
                style.topicDateButtonContainer,
                newsTopic === 3 ? style.topicDateButtonContainerChecked : style.topicDateButtonContainerNotChecked,
              ]}
            >
              <Text style={[style.topicDateButtonText, newsTopic === 3 ? style.topicDateTextChecked : style.topicDateTextNotChecked]}>
                Solar Energy
              </Text>
            </TouchableOpacity>
          </View>
          <View style={style.topicAndDateContainer}>
            <Text style={style.topicDateText}>Date:</Text>
            <TouchableOpacity
              onPress={() => setNewsDate(1)}
              style={[
                style.topicDateButtonContainer,
                newsDate === 1 ? style.topicDateButtonContainerChecked : style.topicDateButtonContainerNotChecked,
              ]}
            >
              <Text style={[style.topicDateButtonText, newsDate === 1 ? style.topicDateTextChecked : style.topicDateTextNotChecked]}>
                Today
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setNewsDate(2)}
              style={[
                style.topicDateButtonContainer,
                newsDate === 2 ? style.topicDateButtonContainerChecked : style.topicDateButtonContainerNotChecked,
              ]}
            >
              <Text style={[style.topicDateButtonText, newsDate === 2 ? style.topicDateTextChecked : style.topicDateTextNotChecked]}>
                7 Days
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setNewsDate(3)}
              style={[
                style.topicDateButtonContainer,
                newsDate === 3 ? style.topicDateButtonContainerChecked : style.topicDateButtonContainerNotChecked,
              ]}
            >
              <Text style={[style.topicDateButtonText, newsDate === 3 ? style.topicDateTextChecked : style.topicDateTextNotChecked]}>
                30 Days
              </Text>
            </TouchableOpacity>
          </View>
          <View style={style.topicAndDateContainer}>
            <Text style={style.topicDateText}>Sort By:</Text>
            <TouchableOpacity
              onPress={() => setNewsSort(1)}
              style={[
                style.topicDateButtonContainer,
                newsSort === 1 ? style.topicDateButtonContainerChecked : style.topicDateButtonContainerNotChecked,
              ]}
            >
              <Text style={[style.topicDateButtonText, newsSort === 1 ? style.topicDateTextChecked : style.topicDateTextNotChecked]}>
                Relevance
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setNewsSort(2)}
              style={[
                style.topicDateButtonContainer,
                newsSort === 2 ? style.topicDateButtonContainerChecked : style.topicDateButtonContainerNotChecked,
              ]}
            >
              <Text style={[style.topicDateButtonText, newsSort === 2 ? style.topicDateTextChecked : style.topicDateTextNotChecked]}>
                Popularity
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setNewsSort(3)}
              style={[
                style.topicDateButtonContainer,
                newsSort === 3 ? style.topicDateButtonContainerChecked : style.topicDateButtonContainerNotChecked,
              ]}
            >
              <Text style={[style.topicDateButtonText, newsSort === 3 ? style.topicDateTextChecked : style.topicDateTextNotChecked]}>
                Newest
              </Text>
            </TouchableOpacity>
          </View>
          <View style={style.topicAndDateContainer}>
            <Text style={style.topicDateText}>Results:</Text>
            <TouchableOpacity
              onPress={() => setNewsSize(10)}
              style={[
                style.topicDateButtonContainer,
                newsSize === 10 ? style.topicDateButtonContainerChecked : style.topicDateButtonContainerNotChecked,
              ]}
            >
              <Text style={[style.topicDateButtonText, newsSize === 10 ? style.topicDateTextChecked : style.topicDateTextNotChecked]}>
                10
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setNewsSize(25)}
              style={[
                style.topicDateButtonContainer,
                newsSize === 25 ? style.topicDateButtonContainerChecked : style.topicDateButtonContainerNotChecked,
              ]}
            >
              <Text style={[style.topicDateButtonText, newsSize === 25 ? style.topicDateTextChecked : style.topicDateTextNotChecked]}>
                25
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setNewsSize(50)}
              style={[
                style.topicDateButtonContainer,
                newsSize === 50 ? style.topicDateButtonContainerChecked : style.topicDateButtonContainerNotChecked,
              ]}
            >
              <Text style={[style.topicDateButtonText, newsSize === 50 ? style.topicDateTextChecked : style.topicDateTextNotChecked]}>
                50
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => handleSearchFilter()}
            style={style.searchButtonContainer}
          >
            <Text style={style.searchButtonText}>Search</Text>
          </TouchableOpacity>
          <View
            style={{
              borderColor: '#23232366',
              borderWidth: 1,
              width: '100%',
            }}
          />
        </View>
        <View style={{ marginTop: 20, marginBottom: '10%', width: '100%', height: '85%' }}>
          {isNewsLoading ? (
            <Placeholder
              Animation={Shine}
              Left={() => <PlaceholderMedia style={{ height: 80, width: 128 }} />}
              style={{ marginVertical: 10 }}
            >
              <Placeholder style={{ width: '85%', marginLeft: 30 }}>
                <PlaceholderLine height={22} />
                <PlaceholderLine />
                <PlaceholderLine />
              </Placeholder>
            </Placeholder>
          ) : (
            <ScrollView style={{ height: '100%' }}>
              {newsCollection.length > 0 ? (
                newsCollection?.map((article, id) => (
                  <NewsCard
                    article={article}
                    key={id}
                  />
                ))
              ) : (
                <Text
                  style={{
                    fontSize: 24,
                    textAlign: 'center',
                    textAlignVertical: 'center',
                    fontFamily: 'Poppins-Medium',
                    color: 'gray',
                    minHeight: 120,
                  }}
                >
                  There are no news for the current filters!
                </Text>
              )}
            </ScrollView>
          )}
        </View>
      </View>
    </View>
  )
}

export default NewsScreen

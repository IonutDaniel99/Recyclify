import { GOOGLE_NEWS_API } from '../configs/google/googleNewsApi'

const sortByMapped = {
  1: 'relevancy',
  2: 'popularity',
  3: 'publishedAt',
}

export const getGoogleNews = async (topic, fromDate, sort, newsSize) => {
  var stringManipulator = ''
  switch (fromDate) {
    case 1:
      var date = new Date()
      var day = date.getDate()
      var month = date.getMonth() + 1
      var year = date.getFullYear()
      stringManipulator = `${year}-${month}-${day}`
      break
    case 2:
      var date = new Date()
      date.setDate(date.getDate() - 7)
      var day = date.getDate()
      var month = date.getMonth() + 1
      var year = date.getFullYear()
      stringManipulator = `${year}-${month}-${day}`
      break
    case 3:
      var date = new Date()
      date.setDate(date.getDate() - 30)
      var day = date.getDate()
      var month = date.getMonth() + 1
      var year = date.getFullYear()
      stringManipulator = `${year}-${month}-${day}`
      break
    default:
      var date = new Date()
      var day = date.getDate()
      var month = date.getMonth() + 1
      var year = date.getFullYear()
      stringManipulator = `${year}-${month}-${day}`
      break
  }

  const sortBy = sortByMapped[sort]

  const url = `https://newsapi.org/v2/everything?q=${topic}&from=${stringManipulator}&language=en&pageSize=${newsSize}$sortBy=${sortBy}&apiKey=${GOOGLE_NEWS_API}`
  console.log(url)
  //   await fetch(url)
  //     .then((response) => response.json())
  //     .then((json) => {
  //       console.log(json)
  //     })
  //     .catch((error) => {
  //       console.error(error)
  //     })
}

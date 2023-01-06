import { StyleSheet } from 'react-native'

export const NewsScreenStyle = StyleSheet.create({
  fullScreen: {
    backgroundColor: '#fff',
    height: '100%',
    padding: 20,
  },
  container: {
    alignItems: 'flex-start',
    backgroundColor: '#fff',
    display: 'flex',
    justifyContent: 'flex-start',
    width: '100%',
  },

  newsScreenTitle: {
    color: '#000',
    fontFamily: 'Poppins-Bold',
    fontSize: 40,
  },
  topicAndDateContainer: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    height: 64,
    marginTop: 10,
    width: '100%',
  },
  topicDateText: {
    color: '#000',
    fontSize: 22,
    fontWeight: 'bold',
    marginRight: 10,
    textAlign: 'center',
  },
  topicDateButtonContainer: {
    borderRadius: 10,
    borderWidth: 1,
    marginRight: 20,
    paddingHorizontal: 14,
    paddingVertical: 10,
  },
  topicDateButtonContainerChecked: {
    backgroundColor: '#000',
  },
  topicDateButtonContainerNotChecked: {
    backgroundColor: '#fff',
  },
  topicDateTextChecked: {
    color: '#fff',
  },
  topicDateTextNotChecked: {
    color: '#000',
  },

  topicDateButtonText: { fontSize: 16 },

  searchButtonContainer: {
    alignItems: 'flex-end',
    display: 'flex',
    marginVertical: 20,
    minWidth: '100%',
  },
  searchButtonText: {
    backgroundColor: '#fff',
    borderColor: 'green',
    borderRadius: 10,
    borderWidth: 2,
    color: '#000',
    fontSize: 18,
    fontWeight: '600',
    marginRight: 20,
    paddingHorizontal: 36,
    paddingVertical: 10,
  },
})

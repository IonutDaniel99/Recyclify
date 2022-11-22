import { StyleSheet } from 'react-native'

export const WelcomeScreenStyle = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    height: '100%',
    width: '100%',
  },
  TouchableOpacity: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    marginTop: 60,
  },

  logoContainer: {
    alignItems: 'center',
    display: 'flex',
    height: 200,
    justifyContent: 'center',
    width: '100%',
    padding: 20,
  },
  logoView: {
    height: 150,
    width: 150,
    zIndex: 10,
    backgroundColor: 'white',
    borderRadius: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoImage: {
    height: 120,
    width: 120,
    zIndex: 10,
  },
  logoText: {
    alignItems: 'flex-end',
    color: 'white',
    display: 'flex',
    fontSize: 28,
    fontWeight: '800',
    maxWidth: 160,
    textAlign: 'center',
    marginTop: 30,
  },

  continueView: {
    alignItems: 'center',
    display: 'flex',
    position: 'relative',
  },
  continueText: {
    alignItems: 'flex-end',
    color: 'white',
    display: 'flex',
    fontSize: 20,
    fontWeight: '600',
    maxWidth: 200,
    textAlign: 'center',
    paddingTop: 80,
    lineHeight: 25,
  },
  rightArrowText: {
    color: 'white',
    display: 'flex',
    fontSize: 40,
    fontWeight: '600',
    textAlign: 'right',
    marginRight: 36,
  },
})

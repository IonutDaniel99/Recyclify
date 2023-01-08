import { StyleSheet } from 'react-native'

export const WelcomeScreenStyle = StyleSheet.create({
  TouchableOpacity: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'space-evenly',
    marginTop: 60,
    width: '100%',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    height: '100%',
    width: '100%',
  },

  continueText: {
    alignItems: 'flex-end',
    color: 'white',
    display: 'flex',
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 25,
    maxWidth: 200,
    paddingTop: 80,
    textAlign: 'center',
  },
  continueView: {
    alignItems: 'center',
    display: 'flex',
    position: 'relative',
  },
  logoContainer: {
    alignItems: 'center',
    display: 'flex',
    height: 200,
    justifyContent: 'center',
    padding: 20,
    width: '100%',
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
    marginTop: 30,
    maxWidth: 160,
    textAlign: 'center',
  },
  logoView: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 100,
    display: 'flex',
    height: 150,
    justifyContent: 'center',
    width: 150,
    zIndex: 10,
  },
  rightArrowText: {
    display: 'flex',
    fontWeight: '600',
    marginRight: 36,
    textAlign: 'right',
  },
})

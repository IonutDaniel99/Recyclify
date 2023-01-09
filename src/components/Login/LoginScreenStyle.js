import { StyleSheet } from 'react-native'

export const LoginScreenStyle = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    fontFamily: 'Poppins',
    height: '100%',
    width: '100%',
  },

  loginContainer: {
    height: '20%',
    width: '100%',
  },
  loginText: {
    color: '#000',
    fontFamily: 'Poppins-Bold',
    fontSize: 56,
    height: '100%',
    textAlign: 'center',
    textAlignVertical: 'bottom',
  },

  socialContainer: {
    display: 'flex',
    height: '60%',
    justifyContent: 'flex-start',
    paddingTop: '30%',
    width: '100%',
  },
  socialButtons: {
    alignItems: 'center',
    display: 'flex',
    height: '40%',
    justifyContent: 'space-evenly',
  },

  loginButtonContainer: {
    borderWidth: 2,
    height: 60,
    width: '60%',
  },

  anonButtonContainer: {
    alignItems: 'center',
    backgroundColor: '#868E9F',
    borderColor: '#868E9F',
    borderWidth: 1,
    display: 'flex',
    elevation: 2,
    flexDirection: 'row',
    fontFamily: 'Poppins',
    height: 64,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    width: '60%',
  },

  signanonImage: {
    alignItems: 'center',
    backgroundColor: '#fff',
    display: 'flex',
    height: 58,
    justifyContent: 'center',
    margin: 2,
    width: 58,
  },

  signInanonImage: {
    borderRadius: 4,
    height: 28,
    position: 'relative',
    width: 28,
  },
  signanonText: {
    color: '#fff',
    fontFamily: 'Poppins-Medium',
    fontSize: 18,
    marginTop: 4,
    paddingLeft: 20,
    paddingRight: 42,
    textAlignVertical: 'center',
  },

  googleButtonContainer: {
    alignItems: 'center',
    backgroundColor: '#4284F3',
    borderColor: '#4284F3',
    borderWidth: 1,
    display: 'flex',
    elevation: 2,
    flexDirection: 'row',
    fontFamily: 'Poppins',
    height: 64,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    width: '60%',
  },

  signGoogleImage: {
    alignItems: 'center',
    backgroundColor: '#fff',
    display: 'flex',
    height: 58,
    justifyContent: 'center',
    margin: 2,
    width: 58,
  },

  signInGoogleImage: {
    borderRadius: 4,
    height: 28,
    position: 'relative',
    width: 28,
  },
  signGoogleText: {
    color: '#fff',
    fontFamily: 'Poppins-Medium',
    fontSize: 18,
    marginTop: 4,
    paddingLeft: 20,
    paddingRight: 42,
    textAlignVertical: 'center',
  },

  noteText: {
    color: '#444',
    fontSize: 14,
  },
})

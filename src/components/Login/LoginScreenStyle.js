import { StyleSheet } from 'react-native'

export const LoginScreenStyle = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: '#ffffff',
    fontFamily: 'Poppins',
  },

  loginText: {
    marginTop: '25%',
    fontStyle: 'normal',
    fontWeight: '700',
    height: 56,
    fontSize: 44,
    color: '#333333',
    fontFamily: 'Poppins',
  },

  inputsContainer: {
    marginTop: '15%',
    display: 'flex',
    width: '80%',
    justifyContent: 'space-around',
    height: 160,
  },

  inputFieldContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    height: 120,
  },

  userInputContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    borderWidth: 2,
    borderRadius: 20,
    borderColor: '#E8E8E8',
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    paddingLeft: 20,
  },

  userIcon: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.75,
    width: 24,
    height: 24,
    fontSize: 22,
    marginRight: 10,
  },

  userInput: {
    width: '70%',
  },

  passIcon: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.75,
    width: 24,
    height: 24,
    fontSize: 22,
    marginRight: 10,
  },

  passInput: {
    width: '70%',
  },
  eyeIcon: {
    fontSize: 22,
    width: 24,
    height: 24,
    marginLeft: 10,
    opacity: 0.75,
  },

  textInput: {
    textAlign: 'right',
    color: 'rgba(100, 100, 100, 0.5)',
    fontWeight: '500',
    fontSize: 14,
  },

  loginButtonContainer: {
    marginTop: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 130,
    height: 40,
    borderWidth: 2,
    borderColor: '#00CA39',
    backgroundColor: '#ffffff',
    borderRadius: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },

  loginButtonText: {
    color: '#000',
    width: 130,
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 20,
    fontStyle: 'normal',
    letterSpacing: 1,
  },

  socialContainer: {
    marginTop: '15%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  socialText: {
    fontWeight: '800',
    fontSize: 14,
    opacity: 0.75,
    color: '#666666',
    fontFamily: 'Poppins',
  },

  socialButtons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '60%',
    marginTop: 14,
  },

  appButtonContainer: {
    width: 46,
    height: 46,
    borderRadius: 50,
    fontFamily: 'Poppins',
  },

  socialButton: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
  noAccount: {
    paddingTop: '25%',
    fontFamily: 'Poppins',
    display: 'flex',
    flexDirection: 'row',
  },
  create: {
    color: '#000',
    marginLeft: 6,
    fontWeight: '700',
    textDecorationLine: 'underline',
  },
})

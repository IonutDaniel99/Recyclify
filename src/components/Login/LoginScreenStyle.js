import { StyleSheet } from 'react-native'

export const LoginScreenStyle = StyleSheet.create({
  appButtonContainer: {
    borderRadius: 50,
    fontFamily: 'Poppins',
    height: 46,
    width: 46,
  },

  container: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    display: 'flex',
    fontFamily: 'Poppins',
    height: '100%',
    width: '100%',
  },

  create: {
    color: '#000',
    fontWeight: '700',
    marginLeft: 6,
    textDecorationLine: 'underline',
  },

  eyeIcon: {
    fontSize: 22,
    height: 24,
    marginLeft: 10,
    opacity: 0.75,
    width: 24,
  },

  inputFieldContainer: {
    display: 'flex',
    height: 120,
    justifyContent: 'space-between',
  },

  inputsContainer: {
    display: 'flex',
    height: 160,
    justifyContent: 'space-around',
    marginTop: '15%',
    width: '80%',
  },

  loginButtonContainer: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderColor: '#00CA39',
    borderRadius: 50,
    borderWidth: 2,
    display: 'flex',
    elevation: 8,
    height: 40,
    justifyContent: 'center',
    marginTop: 40,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    width: 130,
  },

  loginButtonText: {
    color: '#000',
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '600',
    letterSpacing: 1,
    textAlign: 'center',
    width: 130,
  },

  loginText: {
    color: '#333333',
    fontFamily: 'Poppins',
    fontSize: 44,
    fontStyle: 'normal',
    fontWeight: '700',
    height: 56,
    marginTop: '25%',
  },
  noAccount: {
    display: 'flex',
    flexDirection: 'row',
    fontFamily: 'Poppins',
    paddingTop: '25%',
  },

  passIcon: {
    alignItems: 'center',
    display: 'flex',
    fontSize: 22,
    height: 24,
    justifyContent: 'center',
    marginRight: 10,
    opacity: 0.75,
    width: 24,
  },

  passInput: {
    width: '70%',
  },

  socialButton: {
    alignSelf: 'center',
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },

  socialButtons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 14,
    width: '60%',
  },

  socialContainer: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    marginTop: '15%',
  },

  socialText: {
    color: '#666666',
    fontFamily: 'Poppins',
    fontSize: 14,
    fontWeight: '800',
    opacity: 0.75,
  },

  textInput: {
    color: 'rgba(100, 100, 100, 0.5)',
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'right',
  },

  userIcon: {
    alignItems: 'center',
    display: 'flex',
    fontSize: 22,
    height: 24,
    justifyContent: 'center',
    marginRight: 10,
    opacity: 0.75,
    width: 24,
  },
  userInput: {
    width: '70%',
  },
  userInputContainer: {
    alignItems: 'center',
    borderColor: '#E8E8E8',
    borderRadius: 20,
    borderWidth: 2,
    display: 'flex',
    flexDirection: 'row',
    height: 50,
    paddingLeft: 20,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
})

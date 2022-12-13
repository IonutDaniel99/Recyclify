import { StyleSheet } from 'react-native'

export const ProfileScreenStyle = StyleSheet.create({
  ProfileScreenContiner: {
    backgroundColor: '#ffffff',
    height: '100%',
    padding: 20,
    width: '100%',
  },
  UserProfileContainer: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    height: 100,
    justifyContent: 'center',
    padding: 20,
  },
  ProfileImage: {
    borderColor: '#FEEDEB',
    borderRadius: 50,
    borderWidth: 4,
    height: 56,
    width: 56,
  },
  UserProfileTexts: {
    display: 'flex',
    height: 64,
    justifyContent: 'center',
    marginBottom: 5,
    marginLeft: 20,
  },
  UserProfileName: {
    color: '#000',
    fontSize: 20,
    fontWeight: '700',
  },
  UserProfileJoinedDate: {
    borderBottomColor: '#EF4637',
    borderBottomWidth: 1,
    color: '#EF4637',
    fontSize: 10,
    fontWeight: '700',
  },
  UserFavMostContainer: {
    display: 'flex',
    flexDirection: 'row',
    height: 64,
    justifyContent: 'space-between',
  },
  UserFavoriteTypeContainer: {
    alignItems: 'center',
    borderRadius: 4,
    borderWidth: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
  UserResetContainer: {
    backgroundColor: 'blue',
    width: '48%',
  },
  UserFavoritePetIcon: {
    height: 46,
    marginRight: 10,
    width: 46,
  },
  UserFavoriteTexts: {
    display: 'flex',
  },
  UserFavoriteTextLabel: {
    color: '#fff',
    fontSize: 16,
  },
  UserFavoriteTextNumber: {
    color: '#fff',
    fontSize: 16,
  },
  ScoreboardText: {
    fontSize: 16,
    fontWeight: '700',
    marginTop: 18,
  },
  ProductContainer: {
    alignItems: 'center',
    borderRadius: 5,
    display: 'flex',
    height: 90,
    justifyContent: 'center',
  },
})

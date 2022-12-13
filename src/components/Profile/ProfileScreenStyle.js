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
    backgroundColor: 'green',
    display: 'flex',
    flexDirection: 'column',
    height: 200,
    justifyContent: 'center',
    marginBottom: 30,
    padding: 20,
  },
  UserProfileTexts: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    height: 64,
    justifyContent: 'center',
    marginBottom: 5,
  },
  ProfileImage: {
    borderRadius: 50,
    height: 56,
    marginRight: 20,
    width: 56,
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

  UserProfileBadges: {
    display: 'flex',
    flexDirection: 'row',
    flex: '0.33',
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
    fontSize: 18,
    fontWeight: '700',
    marginTop: 18,
  },
  ProductContainer: {
    alignItems: 'center',
    borderRadius: 5,
    display: 'flex',
    height: 100,
    justifyContent: 'center',
  },
})

// import AntDesign from '@expo/vector-icons/AntDesign'
// import { Link } from 'expo-router'
import { StyleSheet, View } from 'react-native'
import PlayersList from '../../components/PlayersList'

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.listContainer}>
        <PlayersList />
      </View>
      {/* <Link href='/addPlayer' style={styles.linkButton}>
        <AntDesign name='adduser' style={styles.addPlayerIcon} />
      </Link> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#25292e',
  },
  listContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 8,
  },
  linkButton: {
    fontSize: 20,
    color: 'white',
    marginVertical: 8,
  },
  // addPlayerIcon: {
  //   color: 'white',
  //   fontSize: 30,
  // },
})

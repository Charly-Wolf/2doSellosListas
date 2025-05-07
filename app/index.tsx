import { Link } from 'expo-router'
import { StyleSheet, View } from 'react-native'
import PlayersList from '../components/PlayersList'

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.listContainer}>
        <PlayersList />
      </View>
      <Link href='/addPlayer' style={styles.linkButton}>
        Add Player
      </Link>
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
    height: '90%',
    width: '100%',
    alignItems: 'center',
    marginTop: 8,
  },
  linkButton: {
    fontSize: 20,
    color: 'white',
    marginVertical: 8,
  },
})

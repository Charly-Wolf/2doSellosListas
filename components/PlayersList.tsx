import { getAllPlayers, updateScore } from '@/storage/playerStorage'
import { Link } from 'expo-router'
import { useEffect, useState } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { Player } from '../models/Player'
import PlayerCard from './PlayerCard'

const PlayersList = () => {
  const [players, setPlayers] = useState<Player[]>([])
  // const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadPlayers = async () => {
      // setLoading(true)
      const allPlayers = await getAllPlayers()
      const sortedPlayers = allPlayers.sort((a, b) => {
        if (a.league === b.league) {
          return a.name.localeCompare(b.name)
        }
        return a.league - b.league
      })
      setPlayers(sortedPlayers)
      // setLoading(false)
    }

    loadPlayers()
  }, [players])

  const handleScoreChange = async (id: string, scoreChange: number) => {
    await updateScore(id, scoreChange)
  }

  // TODO : fix infinite loop when updating players -> useEffect dependency array
  // if (loading) {
  //   return (
  //     <View style={styles.loadingContainer}>
  //       <ActivityIndicator size='large' color='#0ecb86' />
  //     </View>
  //   )
  // }

  if (players.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.text}>No players found</Text>
        <Link href='/newPlayer' style={styles.link}>
          Add a new player
        </Link>
      </View>
    )
  }

  return (
    <FlatList
      style={styles.container}
      data={players}
      keyExtractor={item => item.id!}
      renderItem={({ item }) => (
        <PlayerCard player={item} onScoreChange={handleScoreChange} />
      )}
    />
  )
}
export default PlayersList

const styles = StyleSheet.create({
  container: { width: '90%' },
  text: { color: 'white', textAlign: 'center', fontSize: 30 },
  link: {
    color: '#0ecb86',
    textAlign: 'center',
    marginTop: 10,
    fontSize: 40,
    textDecorationLine: 'underline',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#25292e',
  },
  emptyContainer: {
    marginTop: 80,
  },
})

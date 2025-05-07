import { useEffect, useState } from 'react'
import { FlatList, StyleSheet } from 'react-native'
import { playersData } from '../data/data'
import { Player } from '../models/Player'
import PlayerCard from './PlayerCard'

const PlayersList = () => {
  const [players, setPlayers] = useState<Player[]>([])

  useEffect(() => {
    setPlayers(playersData)
  }, [])

  return (
    <FlatList
      style={styles.container}
      data={players}
      keyExtractor={item => item.id.toString()}
      renderItem={({ item }) => <PlayerCard player={item} />}
    />
  )
}
export default PlayersList

const styles = StyleSheet.create({
  container: { width: '80%' },
})

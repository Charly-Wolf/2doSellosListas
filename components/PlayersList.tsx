import { getAllPlayers } from '@/storage/playerStorage'
import { useEffect, useState } from 'react'
import { FlatList, StyleSheet } from 'react-native'
import { Player } from '../models/Player'
import PlayerCard from './PlayerCard'

const PlayersList = () => {
  const [players, setPlayers] = useState<Player[]>([])

  useEffect(() => {
    const loadPlayers = async () => {
      const allPlayers = await getAllPlayers()
      setPlayers(allPlayers)
    }

    loadPlayers()
  }, [])

  return (
    <FlatList
      style={styles.container}
      data={players}
      keyExtractor={item => item.id!}
      renderItem={({ item }) => <PlayerCard player={item} />}
    />
  )
}
export default PlayersList

const styles = StyleSheet.create({
  container: { width: '90%' },
})

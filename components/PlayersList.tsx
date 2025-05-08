import { updateScore } from '@/storage/playerStorage'
import { FlatList, StyleSheet } from 'react-native'
import { Player } from '../models/Player'
import PlayerCard from './PlayerCard'

interface PlayersListProps {
  players: Player[]
  onScoreUpdated: () => void
  onPlayerDeleted: (id: string) => void
}

const PlayersList: React.FC<PlayersListProps> = ({
  players,
  onScoreUpdated,
  onPlayerDeleted,
}) => {
  const handleScoreChange = async (id: string, scoreChange: number) => {
    await updateScore(id, scoreChange)
    onScoreUpdated()
  }

  return (
    <FlatList
      style={styles.container}
      data={players}
      keyExtractor={item => item.id!}
      renderItem={({ item }) => (
        <PlayerCard
          player={item}
          onScoreChange={handleScoreChange}
          onPlayerDeleted={onPlayerDeleted}
        />
      )}
    />
  )
}
export default PlayersList

const styles = StyleSheet.create({
  container: { width: '100%' },

  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#25292e',
  },
})

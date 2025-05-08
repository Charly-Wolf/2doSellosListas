import { deletePlayer } from '@/storage/playerStorage'
import Ionicons from '@expo/vector-icons/Ionicons'
import React from 'react'
import { Alert, Pressable, StyleSheet, Text, View } from 'react-native'
import { Player } from '../models/Player'

interface PlayerCardProps {
  player: Player
  onScoreChange: (id: string, scoreChange: number) => void
}

const PlayerCard: React.FC<PlayerCardProps> = ({ player, onScoreChange }) => {
  const confirmAction = (
    title: string,
    message: string,
    onConfirm: () => void
  ) => {
    Alert.alert(
      title,
      message,
      [
        { text: 'No', style: 'cancel' },
        { text: 'Yes', onPress: onConfirm },
      ],
      { cancelable: true }
    )
  }

  const handleEdit = () => {
    Alert.alert(`Edit ${player.name}?`, `NOT YET IMPLEMENTED! Sorry Ema 😅`)
  }

  const handleDelete = async () => {
    confirmAction(
      'Delete Player',
      `Are you sure you want to delete ${player.name}?`,
      async () => {
        await deletePlayer(player.id!)
      }
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.actionContainer}>
        <Pressable style={styles.actionButton} onPress={handleEdit}>
          <Ionicons name='pencil-sharp' size={24} color={'white'} />
        </Pressable>
        <Pressable style={styles.actionButton} onPress={handleDelete}>
          <Ionicons name='trash-bin-sharp' size={24} color={'red'} />
        </Pressable>
      </View>
      <View style={styles.dataContainer}>
        <Text style={styles.name}>{player.name}</Text>
        <Text style={styles.league}>League: {player.league}</Text>
        <View style={styles.scoreContainer}>
          <Pressable onPress={() => onScoreChange(player.id!, -1)}>
            <Ionicons name='remove-circle-outline' size={50} color={'white'} />
          </Pressable>
          <Text style={styles.score}>{player.score}</Text>
          <Pressable onPress={() => onScoreChange(player.id!, 1)}>
            <Ionicons name='add-circle-outline' size={50} color={'white'} />
          </Pressable>
        </View>
      </View>
    </View>
  )
}
export default PlayerCard

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    margin: 8,
    paddingVertical: 10,
    paddingHorizontal: 24,
    alignItems: 'center',
    backgroundColor: '#51555e',
    borderRadius: 10,
  },
  name: {
    fontSize: 16,
    color: 'white',
    marginHorizontal: 10,
  },
  league: {
    fontSize: 16,
    color: '#66f0ff',
    marginHorizontal: 10,
  },
  dataContainer: {
    flex: 1,
    alignItems: 'center',
  },
  scoreContainer: {
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '60%',
  },
  score: { fontWeight: 'bold', fontSize: 40, color: 'white' },
  actionContainer: {},
  actionButton: {
    padding: 10,
  },
})

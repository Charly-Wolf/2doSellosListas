import { deletePlayer } from '@/storage/playerStorage'
import Ionicons from '@expo/vector-icons/Ionicons'
import React from 'react'
import { Alert, Pressable, StyleSheet, Text, View } from 'react-native'
import { Player } from '../models/Player'

interface PlayerCardProps {
  player: Player
  onScoreChange: (id: string, scoreChange: number) => void
  onPlayerDeleted: (id: string) => void
}

const PlayerCard: React.FC<PlayerCardProps> = ({
  player,
  onScoreChange,
  onPlayerDeleted,
}) => {
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
        { text: 'Sí', onPress: onConfirm },
      ],
      { cancelable: true }
    )
  }

  const handleEdit = () => {
    Alert.alert(
      `Editar nombre de "${player.name}"?`,
      `NO IMPLEMENTADO (aún) 😅`
    )
  }

  const handleDelete = async () => {
    confirmAction(
      'Borrar Jugador',
      `Seguro querés borrar a "${player.name}"?`,
      async () => {
        await deletePlayer(player.id!)
        onPlayerDeleted(player.id!)
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
        <View style={styles.scoreContainer}>
          <Pressable
            onPress={() => onScoreChange(player.id!, -1)}
            style={{
              opacity: player.league === 1 && player.score === 0 ? 0 : 1,
            }}
          >
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
    paddingVertical: 8,
    paddingHorizontal: 16,
    alignItems: 'center',
    backgroundColor: '#545a67',
    borderRadius: 10,
  },
  name: {
    fontSize: 16,
    color: 'white',
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

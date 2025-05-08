import Ionicons from '@expo/vector-icons/Ionicons'
import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { Player } from '../models/Player'

interface PlayerCardProps {
  player: Player
}

const PlayerCard: React.FC<PlayerCardProps> = ({ player }) => {
  return (
    <View style={styles.container}>
      <View style={styles.actionContainer}>
        <Pressable
          style={styles.actionButton}
          onPress={() => alert(`Edit player ${player.name}?`)}
        >
          <Ionicons name='pencil-sharp' size={24} color={'white'} />
        </Pressable>
        <Pressable
          style={styles.actionButton}
          onPress={() => alert(`Delete player ${player.name}?`)}
        >
          <Ionicons name='trash-bin-sharp' size={24} color={'red'} />
        </Pressable>
      </View>
      <View style={styles.dataContainer}>
        <Text style={styles.name}>{player.name}</Text>
        <View style={styles.scoreContainer}>
          <Pressable>
            <Ionicons name='remove-circle-outline' size={50} color={'white'} />
          </Pressable>
          <Text style={styles.score}>{player.score}</Text>
          <Pressable>
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

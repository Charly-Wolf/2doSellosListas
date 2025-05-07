import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Player } from '../models/Player'

interface PlayerCardProps {
  player: Player
}

const PlayerCard: React.FC<PlayerCardProps> = ({ player }) => {
  return (
    <View style={styles.cardContainer}>
      <Text style={styles.name}>{player.name}</Text>
      <Text style={styles.score}>{player.score}</Text>
    </View>
  )
}
export default PlayerCard

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    flexDirection: 'row',
    margin: 8,
    paddingVertical: 10,
    paddingHorizontal: 30,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#51555e',
    borderRadius: 10,
  },
  name: {
    fontSize: 16,
    color: 'white',
    marginHorizontal: 10,
  },
  score: { fontWeight: 'bold', fontSize: 24, color: 'white' },
})

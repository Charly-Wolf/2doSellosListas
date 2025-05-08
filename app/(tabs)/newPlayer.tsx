import { Player } from '@/models/Player'
import { addPlayer } from '@/storage/playerStorage'
import Ionicons from '@expo/vector-icons/Ionicons'
import { useState } from 'react'
import { Pressable, StyleSheet, TextInput, View } from 'react-native'

const NewPlayer = () => {
  const [name, onChangeName] = useState('')

  const savePlayer = async () => {
    if (name.length < 3) {
      alert('Name must be at least 3 characters long')
      return
    }

    const newPlayer: Player = {
      name,
      score: 0,
      league: 1,
    }

    await addPlayer(newPlayer)

    onChangeName('')
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder='Player name'
        placeholderTextColor='#a5a5a5'
        onChangeText={onChangeName}
        value={name}
      />
      <Pressable style={styles.button} onPress={savePlayer}>
        <Ionicons name='add-circle' color='white' size={30} />
      </Pressable>
    </View>
  )
}
export default NewPlayer

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#25292e',
  },
  input: {
    marginTop: 80,
    width: '80%',
    borderRadius: 8,
    margin: 12,
    padding: 24,
    color: 'white',
    fontSize: 24,
    backgroundColor: '#3a3f44',
  },
  button: {
    width: '40%',
    borderRadius: 8,
    padding: 10,
    marginTop: 12,
    alignItems: 'center',
    backgroundColor: '#0ecb86',
  },
})

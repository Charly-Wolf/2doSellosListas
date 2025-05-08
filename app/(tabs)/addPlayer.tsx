import Ionicons from '@expo/vector-icons/Ionicons'
import { Pressable, StyleSheet, TextInput, View } from 'react-native'

const addPlayer = () => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder='Player name'
        placeholderTextColor='#a5a5a5'
      />
      <Pressable style={styles.button}>
        <Ionicons name='add-circle' color='white' size={30} />
      </Pressable>
    </View>
  )
}
export default addPlayer

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

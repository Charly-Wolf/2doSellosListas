import { StyleSheet, Text, View } from 'react-native'

const addPlayer = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Add PLayer</Text>
    </View>
  )
}
export default addPlayer

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#25292e',
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
})

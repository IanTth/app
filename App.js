import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, Image } from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/eu.jpeg')} style={styles.img} />

      <Text style={styles.nome}>Ian Rendrick</Text>
      <StatusBar style='auto' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    flex: 2,
    resizeMode: 'contain',
    width: '100%',
  },
  nome: {
    bottom: '20%',
    fontSize: 50,
  },
})

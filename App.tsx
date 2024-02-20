import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, Text } from 'react-native';

function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
        <Image source={require('./assets/Logo.png')} style={styles.logo} />
        <Text style={styles.text}>Bem vindo(a)!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FF0000',
  },

  whiteBackground: {
    backgroundColor: '#F6FFFD',
    width: 360,
    height: 641,
    top: 159,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  logo: {
    width: 200,
    height: 51,
    marginTop: 60,
  },
  text: {
    color: '#F6FFFD',
    fontSize: 20,
    marginTop: 20,
  },
});

export default App;
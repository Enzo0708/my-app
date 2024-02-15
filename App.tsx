import {View, Text, Button, StyleSheet} from 'react-native';
import { StatusBar } from 'expo-status-bar';

function App (){
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <Text>Olá Mundo</Text>
      <Text>Olá Mundo</Text>
      <Button title="Clique Aqui" />
    </View> 
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff0000',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default App;
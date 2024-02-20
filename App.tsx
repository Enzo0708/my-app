import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, Text, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
        <Image source={require('./assets/Logo.png')} style={styles.logo} />
        <Text style={styles.text}>Bem vindo(a)!</Text>
        <View style={styles.container2}>
          <Text style={styles.title}>Email</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Digite seu e-mail"
            />
          </View>
          <Text style={styles.title}>Senha</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Sua senha"
              secureTextEntry={true}
            />
          </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FF0000',
  },
  logo: {
    width: 200,
    height: 51,
    marginTop: 60,
  },
  text: {
    color: '#FFFFFF',
    fontSize: 20,
    marginTop: 20,
  },
  container2: {
    backgroundColor: '#F6FFFD',
    width: 360,
    height: 641,
    top: 26,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    padding: 20,
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
    marginTop: 20,
  },
  inputContainer: {
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    marginBottom: 20,
  },
  input: {
    height: 40,
    paddingHorizontal: 10,
  },
});
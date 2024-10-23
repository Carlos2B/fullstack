import React, { useState } from 'react';
import { View, Text, TextInput, AsyncStorage, StyleSheet, Pressable, Image} from 'react-native';
import { Link } from 'expo-router';

const Login = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = async () => {
    try {
      const storedEmail = await AsyncStorage.getItem('email');
      const storedSenha = await AsyncStorage.getItem('senha');

      if (email === storedEmail && senha === storedSenha) {
        alert('Login realizado com sucesso!');
      } else {
        alert('Email ou senha incorretos!');
      }
    } catch (error) {
      alert('Erro ao realizar login!');
    }
  };

  return (
    <View style={styles.container}>

<Image
        style={styles.img}
        source={{
          uri: 'https://store-images.s-microsoft.com/image/apps.53804.13665024440928540.8513e7f5-4428-4248-8c85-deba752977da.e3811950-6195-4195-afe4-a6386b46610f',
        }}
      />

    <Text style={styles.title}>Login</Text>
    <TextInput
      style={styles.input}
      placeholder="Usuário"
      value={email}
      onChangeText={(text) => setEmail(text)}
    />
    <TextInput
      style={styles.input}
      placeholder="Senha"
      value={senha}
      onChangeText={(text) => setSenha(text)}
      secureTextEntry={true}
    />
    <Pressable title="Login" onPress={handleLogin} style={styles.button}>
      <Text style={styles.buttonText}><Link href="tela">Login</Link></Text>
    </Pressable>
    
      <Text style={styles.link} onPress={() => Linking.openURL('https://example.com/recuperar-senha')}>
        Esuqeci a senha!
      </Text>
      <Text style={styles.noAccount}>Não tem cadastro?</Text>
      <Text style={styles.link}>
        <Link href="cadastro">Cadastre-se</Link>
      </Text>
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#333',
  },

  img: {
    width: 200,
    height: 200
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#FFC107', 
  },
  input: {
    width: 250,
    borderColor: '#FFC107', 
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginBottom: 20,
    borderRadius: 10, 
    backgroundColor: '#444', 
    color: '#fff',
  },
  button: {
    padding: 10,
    borderRadius: 5,
    shadowColor: '#000', 
    shadowOpacity: 0.5,
    shadowRadius: 5,
    borderColor: '#FFC107', 
    borderWidth: 1, 
    borderRadius: 10
  },
  buttonText: {
    fontSize: 18,
    color: '#FFC107', 
  },

  link: {
    fontSize: 16,
    color: '#FFC107', 
    textDecorationLine: 'none',
  },
  noAccount: {
    fontSize: 16,
    color: '#666', 
    marginBottom: 10,
  },
});

export default Login;
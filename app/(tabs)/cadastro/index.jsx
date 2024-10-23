import React, { useState } from 'react';
import { View, Text, TextInput, AsyncStorage, StyleSheet, Pressable, Image } from 'react-native';
import { Link, useRouter } from 'expo-router';

const Cadastro = () => {
  const router = useRouter(); // Hook para navegação
  const [usuario, setUsuario] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  const handleCadastro = async () => {
    try {
      const storedEmail = await AsyncStorage.getItem('email');

      if (storedEmail === email) {
        alert('Email já cadastrado!');
      } else if (senha !== confirmarSenha) {
        alert('As senhas não coincidem!');
      } else {
        await AsyncStorage.setItem('usuario', usuario);
        await AsyncStorage.setItem('email', email);
        await AsyncStorage.setItem('senha', senha);
        alert('Cadastro realizado com sucesso!');
        router.push('/login'); // Redireciona para a tela de login
      }
    } catch (error) {
      alert('Erro ao realizar cadastro!');
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

      <Text style={styles.title}>Cadastro</Text>
      <TextInput
        style={styles.input}
        placeholder="Usuário"
        value={usuario}
        onChangeText={(text) => setUsuario(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
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
      <TextInput
        style={styles.input}
        placeholder="Confirmar Senha"
        value={confirmarSenha}
        onChangeText={(text) => setConfirmarSenha(text)}
        secureTextEntry={true}
      />
      <Pressable title="Cadastrar" onPress={handleCadastro} style={styles.button}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </Pressable>

      <Text style={styles.noAccount}>Já tem um cadastro?</Text>
      <Text style={styles.link}>
        <Link href="../">Faça login</Link>
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
    height: 200,
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
    borderRadius: 10,
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

export default Cadastro;

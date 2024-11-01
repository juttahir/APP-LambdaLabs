// Contato.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, ScrollView } from 'react-native';

const Contato = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleEnviar = () => {
    Alert.alert('Mensagem enviada', 'Obrigado por entrar em contato!', [{ text: 'OK' }]);
    setNome('');
    setEmail('');
    setMensagem('');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Entre em contato conosco</Text>
        <Text style={styles.description}>
          Preencha o formulário abaixo e um de nossos especialistas entrará em contato com você.
        </Text>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={[styles.input, { height: 100 }]}
        placeholder="Mensagem"
        value={mensagem}
        onChangeText={setMensagem}
        multiline
      />
      <Button title="Enviar" onPress={handleEnviar} color="#007bff" />

      <View style={styles.footer}>
        <Text style={styles.footerText}>&copy; 2024 Copyright: Lambda-Labs</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  header: {
    marginBottom: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    textAlign: 'center',
    color: '#333',
  },
  input: {
    width: '100%',
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  footer: {
    marginTop: 30,
    alignItems: 'center',
  },
  footerText: {
    color: '#333',
  },
});

export default Contato;

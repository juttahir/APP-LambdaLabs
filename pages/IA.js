import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native'; // Adicione StyleSheet aqui

const IAScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>IA LambdaLabs - SanofIA</Text>
      <Text style={styles.description}>
        SanofIA é uma inteligência artificial inovadora que transforma documentos em insights valiosos. Nossa IA é capaz de gerar texto e realizar análises preditivas a partir de dados, permitindo que você tome decisões informadas com base em informações precisas.
      </Text>
      <Text style={styles.description}>
        Além disso, SanofIA pode criar vídeos e apresentações em PowerPoint de alta qualidade. O diferencial é a narração em áudio gerada pela IA, que simula a voz humana, proporcionando uma experiência de apresentação envolvente e profissional.
      </Text>
      <Image source={require('../assets/images/Novo Projeto4.png')} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 16,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginTop: 16,
  },
});

export default IAScreen;

import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet, Modal, TouchableOpacity, FlatList, ImageBackground, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Consulta from './pages/Consulta';
import Contato from './pages/Contato';
import IA from './pages/IA';
import Historia from './pages/Historia';

import backgroundImage from './assets/images/LambdaLabsO.png'; // ajuste o caminho conforme necessário

const Stack = createNativeStackNavigator();

const HomeScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [empresa, setEmpresa] = useState('');
  const [reserva, setReserva] = useState('');
  const [dataReserva, setDataReserva] = useState('');
  const [visitantes, setVisitantes] = useState([]);

  const handleCadastrar = () => {
    setVisitantes([...visitantes, { nome, sobrenome, empresa, reserva, dataReserva }]);
    setModalVisible(false);
    setNome('');
    setSobrenome('');
    setEmpresa('');
    setReserva('');
    setDataReserva('');
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <View style={styles.container}>
        <View style={styles.menu}>
        <Image source={require('./assets/images/LambdaLabsW.png')} style={styles.image} />
          <View style={styles.navbar}>
            <TouchableOpacity onPress={() => navigation.reset({
                index: 0,
                routes: [{ name: 'Home' }],
              })}>
              <Text style={styles.navLink}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Consulta', { visitantes })}>
              <Text style={styles.navLink}>Consulta</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('IA')}>
              <Text style={styles.navLink}>Nossa IA</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Historia')}>
              <Text style={styles.navLink}>Nossa História</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Contato')}>
              <Text style={styles.navLink}>Contato</Text>
            </TouchableOpacity>
          </View>
        </View>

        <Button title="Cadastrar" onPress={() => setModalVisible(true)} />

        <TextInput
          style={styles.searchInput}
          placeholder="Buscar"
        />

        <FlatList
          data={visitantes}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text>{item.nome} {item.sobrenome} - {item.empresa} - {item.reserva} - {item.dataReserva}</Text>
            </View>
          )}
        />

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>Cadastre uma visita em nossa start-up.</Text>
            <TextInput
              style={styles.input}
              placeholder="Nome"
              value={nome}
              onChangeText={setNome}
            />
            <TextInput
              style={styles.input}
              placeholder="Sobrenome"
              value={sobrenome}
              onChangeText={setSobrenome}
            />
            <TextInput
              style={styles.input}
              placeholder="Empresa"
              value={empresa}
              onChangeText={setEmpresa}
            />
            <TextInput
              style={styles.input}
              placeholder="Nº da reserva"
              keyboardType="numeric"
              value={reserva}
              onChangeText={setReserva}
            />
            <TextInput
              style={styles.input}
              placeholder="Data da Reserva"
              value={dataReserva}
              onChangeText={setDataReserva}
            />
            <View style={styles.modalButtons}>
              <Button title="Fechar" onPress={() => setModalVisible(false)} color="red" />
              <Button title="Cadastrar" onPress={handleCadastrar} color="green" />
            </View>
          </View>
        </Modal>

        <View style={styles.footer}>
          <Text style={styles.footerText}>&copy; 2024 Copyright: Lambda-Labs</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

const ConsultaScreen = ({ route }) => {
  const { visitantes } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela de Consulta</Text>
      <Consulta visitantes={visitantes} />
    </View>
  );
};

const ContatoScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela de Contato</Text>
      {/* Adicione o conteúdo da tela de contato aqui */}
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Consulta" component={ConsultaScreen} />
        <Stack.Screen name="IA" component={IA} />
        <Stack.Screen name="Historia" component={Historia} />
        <Stack.Screen name="Contato" component={Contato} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  menu: {
    backgroundColor: 'rgba(42, 42, 42, 0.7)',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
    color: '#fff',
  },
  navbar: {
    flexDirection: 'column',
    alignItems: 'center',
    marginVertical: 10,
  },
  navLink: {
    color: '#fff',
    fontWeight: '700',
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  searchInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  item: {
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 5,
    borderRadius: 5,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: '100%',
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    padding: 10,
    backgroundColor: 'rgba(41, 41, 41, 0.7)',
  },
  footerText: {
    textAlign: 'center',
    color: '#fff',
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginTop: 20,
  },
});

export default App;

// Consulta.js

import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, Modal, StyleSheet } from 'react-native';

const Consulta = ({ visitantes }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedVisitor, setSelectedVisitor] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [localVisitantes, setLocalVisitantes] = useState(visitantes); // Estado local para a lista de visitantes

  const handleEdit = (visitor) => {
    setSelectedVisitor(visitor);
    setModalVisible(true);
  };

  const filteredVisitors = localVisitantes.filter(visitor => 
    visitor.nome.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSave = () => {
    if (selectedVisitor) {
      setLocalVisitantes(prev => 
        prev.map(visitor => 
          visitor.reserva === selectedVisitor.reserva ? selectedVisitor : visitor
        )
      );
    }
    setModalVisible(false);
    setSelectedVisitor(null);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Buscar"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />

      <FlatList
        data={filteredVisitors}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.nome} {item.sobrenome} - {item.empresa} - {item.reserva} - {item.dataReserva}</Text>
            <Button title="Editar" onPress={() => handleEdit(item)} />
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
          <Text style={styles.modalTitle}>Editar Visitante</Text>
          {selectedVisitor && (
            <>
              <TextInput
                style={styles.input}
                placeholder="Nome"
                value={selectedVisitor.nome}
                onChangeText={(text) => setSelectedVisitor({ ...selectedVisitor, nome: text })}
              />
              <TextInput
                style={styles.input}
                placeholder="Sobrenome"
                value={selectedVisitor.sobrenome}
                onChangeText={(text) => setSelectedVisitor({ ...selectedVisitor, sobrenome: text })}
              />
              <TextInput
                style={styles.input}
                placeholder="Empresa"
                value={selectedVisitor.empresa}
                onChangeText={(text) => setSelectedVisitor({ ...selectedVisitor, empresa: text })}
              />
              <TextInput
                style={styles.input}
                placeholder="Nº da reserva"
                keyboardType="numeric"
                value={selectedVisitor.reserva}
                onChangeText={(text) => setSelectedVisitor({ ...selectedVisitor, reserva: text })}
              />
              <TextInput
                style={styles.input}
                placeholder="Data da Reserva"
                value={selectedVisitor.dataReserva}
                onChangeText={(text) => setSelectedVisitor({ ...selectedVisitor, dataReserva: text })}
              />
            </>
          )}
          <View style={styles.modalButtons}>
            <Button title="Fechar" onPress={() => setModalVisible(false)} color="red" />
            <Button title="Salvar" onPress={handleSave} color="green" />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f0f0f0',
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
});

export default Consulta;

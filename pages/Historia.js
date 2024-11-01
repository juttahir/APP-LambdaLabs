import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const Historia = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>IA LambdaLabs - SanofIA</Text>
            <Text style={styles.description}>
                Somos um time de cinco integrantes: Juttahir Moraes, Edgard Souza, Ivan Ometto, Gustavo Albuquerque e Carlos Henrique. Todos nós pertencemos à turma de 2024 do 3ECR de Engenharia da Computação da FIAP. Neste ano, aceitamos o desafio de desenvolver uma solução de Inteligência Artificial para a renomada multinacional farmacêutica alemã Sanofi.
            </Text>
            <Text style={styles.description}>
                Inicialmente, enfrentamos dois desafios principais: criar uma solução para análise de documentos e tratamento de dados. No entanto, ao aprofundarmos nossa investigação, identificamos outros dois problemas significativos: a centralização de dados e a integração dos sistemas existentes.
            </Text>
            <Text style={styles.description}>
                Em resposta a essas necessidades, desenvolvemos uma IA inovadora que não apenas gera apresentações em vídeo, mas também realiza análises documentais e previsões, tudo em uma única plataforma. Essa solução integra diversas funcionalidades, permitindo uma experiência mais coesa e eficiente para a Sanofi.
            </Text>
            <Text style={styles.description}>
                Estamos empolgados com o potencial dessa IA e confiantes de que ela proporcionará grandes avanços na forma como a Sanofi lida com dados e documentação. Juntos, estamos prontos para transformar desafios em oportunidades e impactar positivamente o futuro da empresa!
            </Text>
            <Text style={styles.description}>
                Ficamos também muito honrados com o reconhecimento da Sanofi em nos colocar no segundo ponto mais alto do pódium este ano, isso nos motiva ainda mais em sermos os melhores cada vez mais!
            </Text>
            <Image source={require('../assets/images/next.jpg')} style={styles.image} />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
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
        height: 400,
        resizeMode: 'cover',
        marginTop: 16,
    },
});

export default Historia;

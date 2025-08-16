import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ImageBackground } from 'react-native';

const backgroundUrl = 'https://i.pinimg.com/736x/bf/1a/03/bf1a031f0f65e284e2d500009ab78263.jpg'; // Exemplo de imagem

const App = () => {
  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0);
  const [imc, setImc] = useState<number | null>(null);

  const calcularIMC = () => {
    if (!peso || !altura) {
      setImc(null);
      return;
    }
    const alturaMetros = altura / 100;
    const imcCalculado = peso / (alturaMetros * alturaMetros);
    setImc(Number(imcCalculado.toFixed(2)));
  };

  return (
    <ImageBackground
      source={{ uri: backgroundUrl }}
      style={styles.background}
      resizeMode="cover"
      blurRadius={2}
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>Calculadora de IMC</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={peso ? peso.toString() : ''}
            onChangeText={(texto)=> setPeso( parseFloat(texto))}
            placeholder="Peso (kg)"
            keyboardType="numeric"
            placeholderTextColor="#aaa"
          />
          <TextInput
            style={styles.input}
            value={altura ? altura.toString() : ''}
            onChangeText={(texto) => setAltura(parseFloat(texto))}
            placeholder="Altura (cm)"
            keyboardType="numeric"
            placeholderTextColor="#aaa"
          />
          <Button title="Calcular IMC" onPress={calcularIMC} color="#4F8EF7" />
        </View>

        {imc !== null && !isNaN(imc) && (
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Resultado</Text>
            <Text style={styles.cardText}>Peso: <Text style={styles.bold}>{peso} kg</Text></Text>
            <Text style={styles.cardText}>Altura: <Text style={styles.bold}>{altura} cm</Text></Text>
            <Text style={styles.cardText}>IMC: <Text style={styles.bold}>{imc}</Text></Text>
          </View>
        )}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  overlay: {
    flex: 1,
    
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#f74fefa2',
    marginBottom: 32,
    letterSpacing: 1,
  },
  inputContainer: {
    width: '90%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
    marginBottom: 24,
  },
  input: {
    height: 48,
    borderColor: '#060c16ff',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 16,
    paddingHorizontal: 12,
    fontSize: 16,
    backgroundColor: '#F7FAFC',
    color: '#333',
  },
  card: {
    width: '90%',
    backgroundColor: '#fff',
    padding: 24,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOpacity: 0.10,
    shadowRadius: 10,
    elevation: 6,
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#cf28cfff',
    marginBottom: 16,
  },
  cardText: {
    fontSize: 18,
    color: '#940c67ff',
    marginBottom: 8,
  },
  bold: {
    fontWeight: 'bold',
    color: '#b633afff',
  },
});

export default App;

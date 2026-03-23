// App.js
import React, { useRef, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, Animated } from 'react-native';
import { StatusBar } from 'expo-status-bar';
 
export default function App() {
  const testarAlerta = () => {
    Alert.alert(
      'Funcionou!',         // título
      'O projeto está pronto para começar.',  // mensagem
      [{ text: 'OK' }]      // botões
    );
  };

  const exibirUrlApi = () => {
    Alert.alert(
      'URL da API',
      'https://jsonplaceholder.typicode.com'
    )
  }

  const fadeOpacity = useRef(new Animated.Value(1)).current; // Especifica o valor inicial de opacidade
  
  const fadeAnimation = () => {
    Animated.loop( // Cria o loop de pisca-pisca
      Animated.timing(fadeOpacity, {
        toValue: 0, // Opacity vai a 0 (invisível)
        duration: 1000, // Dura 1 segundo (1000 milésimos)
        useNativeDriver: true // Configuração de Threading para animação rodar eficazmente
      })
    ).start(); // Inicia o loop
  };

  useEffect(() => { // Hook para iniciar, tipo um eventListener
    fadeAnimation();
  }, [fadeAnimation]); // Inicia a cada fez que mudar/rodar fadeAnimation, forçando um loop
  
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.titulo}>PostBoard</Text>
      <Text style={styles.subtitulo}>Módulo 1 — Ambiente pronto!</Text>
      <Animated.View style={{ opacity: fadeOpacity }}>
        <Text style={styles.subtitulo}>Ivan Santos e Felipe Reis</Text>
      </Animated.View>
      <TouchableOpacity
        style={styles.botao}
        onPress={testarAlerta}
      >
        <Text style={styles.textoBotao}>Testar alerta</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botao}
        onPress={exibirUrlApi}
      >
          <Text style={styles.textoBotao}>Exibir URL da Api</Text>
      </TouchableOpacity>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e3a5f',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  titulo: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 8,
  },
  subtitulo: {
    fontSize: 16,
    color: '#ffffff',
    marginBottom: 40,
  },
  botao: {
    backgroundColor: '#1a56db',
    paddingHorizontal: 32,
    paddingVertical: 14,
    borderRadius: 8,
  },
  textoBotao: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});

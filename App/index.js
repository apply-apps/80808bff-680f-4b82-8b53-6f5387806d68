// Filename: index.js
// Combined code from all files

import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';

const LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

export default function App() {
  const [currentLetter, setCurrentLetter] = useState(0);

  const handleNextLetter = () => {
    setCurrentLetter((prev) => (prev + 1) % LETTERS.length);
  };

  const handlePrevLetter = () => {
    setCurrentLetter((prev) => (prev - 1 + LETTERS.length) % LETTERS.length);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.box}>
          <Text style={styles.letter}>{LETTERS[currentLetter]}</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={handlePrevLetter} style={styles.button}>
              <Text style={styles.buttonText}>Previous</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleNextLetter} style={styles.button}>
              <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: '#F0FFF0', // Light green background
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 15,
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    alignItems: 'center',
  },
  letter: {
    fontSize: 100,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333333',
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  button: {
    backgroundColor: '#5984AA', // Darker blue
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 20,
  },
});
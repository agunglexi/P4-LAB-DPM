import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';

export default function App() {
  const [scoreA, setScoreA] = useState(0);
  const [scoreB, setScoreB] = useState(0);
  const [winner, setWinner] = useState(null); // Menyimpan pemenang

  const teamA = "Tim A";
  const teamB = "Tim B";

  const increaseScore = (team) => {
    if (team === 'A') {
      const newScore = scoreA + 1;
      setScoreA(newScore);
      if (newScore === 10) {
        setWinner(teamA); // Menentukan pemenang
        Alert.alert(`${teamA} Menang!`);
      }
    } else if (team === 'B') {
      const newScore = scoreB + 1;
      setScoreB(newScore);
      if (newScore === 10) {
        setWinner(teamB); // Menentukan pemenang
        Alert.alert(`${teamB} Menang!`);
      }
    }
  };

  const decreaseScore = (team) => {
    if (team === 'A' && scoreA > 0) {
      setScoreA(scoreA - 1);
    } else if (team === 'B' && scoreB > 0) {
      setScoreB(scoreB - 1);
    }
  };

  const resetScores = () => {
    setScoreA(0);
    setScoreB(0);
    setWinner(null); // Mengatur ulang pemenang
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>⚽ Pengelola Skor Futsal ⚽</Text>

      {winner && (
        <Text style={styles.winnerText}>{winner} Menang! 🏆</Text>
      )}

      {!winner && (
        <>
          <View style={[styles.teamContainer, styles.shadowEffect]}>
            <Text style={styles.teamName}>{teamA}</Text>
            <Text style={styles.score}>{scoreA}</Text>
            <View style={styles.buttonRow}>
              <TouchableOpacity style={styles.button} onPress={() => increaseScore('A')}>
                <Text style={styles.buttonText}>+</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={() => decreaseScore('A')}>
                <Text style={styles.buttonText}>-</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={[styles.teamContainer, styles.shadowEffect]}>
            <Text style={styles.teamName}>{teamB}</Text>
            <Text style={styles.score}>{scoreB}</Text>
            <View style={styles.buttonRow}>
              <TouchableOpacity style={styles.button} onPress={() => increaseScore('B')}>
                <Text style={styles.buttonText}>+</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={() => decreaseScore('B')}>
                <Text style={styles.buttonText}>-</Text>
              </TouchableOpacity>
            </View>
          </View>
        </>
      )}

      <TouchableOpacity style={[styles.resetButton, styles.shadowEffect]} onPress={resetScores}>
        <Text style={styles.resetButtonText}>Reset Skor</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 30,
    textAlign: 'center',
  },
  teamContainer: {
    alignItems: 'center',
    marginBottom: 30,
    backgroundColor: '#1f2937',
    padding: 20,
    borderRadius: 15,
    width: '80%',
  },
  teamName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3b82f6',
    marginBottom: 10,
  },
  score: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#facc15',
    marginBottom: 20,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
  },
  button: {
    backgroundColor: '#22c55e',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 30,
  },
  buttonText: {
    fontSize: 20,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  resetButton: {
    marginTop: 20,
    backgroundColor: '#dc2626',
    paddingVertical: 15,
    paddingHorizontal: 35,
    borderRadius: 15,
  },
  resetButtonText: {
    fontSize: 18,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  winnerText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#facc15',
    textAlign: 'center',
    marginVertical: 20,
  },
  shadowEffect: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
});

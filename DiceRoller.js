import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';


const diceImages = {
  1: require('./assets/images/face1.png'),
  2: require('./assets/images/face2.png'),
  3: require('./assets/images/face3.png'),
  4: require('./assets/images/face4.png'),
  5: require('./assets/images/face5.png'),
  6: require('./assets/images/face6.png'),
};

const DiceRoller = () => {
  const [diceFace, setDiceFace] = useState(1);


  const rollDice = () => {
    const randomNumber = Math.floor(Math.random() * 6) + 1; 
    setDiceFace(randomNumber);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dice Roller</Text>
      <Image source={diceImages[diceFace]} style={styles.diceImage} />
      <Button title="Roll Dice" onPress={rollDice} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 50,
    marginBottom: 20,
  },
  diceImage: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
});

export default DiceRoller;

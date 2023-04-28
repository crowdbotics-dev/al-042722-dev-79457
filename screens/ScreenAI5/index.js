import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const RainbowScreen = () => {
  return <View style={styles.container}>
      <Text style={styles.rainbowText}>RAINBOW TEXT</Text>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  rainbowText: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    textShadowColor: '#FF0000',
    textShadowOffset: {
      width: 1,
      height: 1
    },
    textShadowRadius: 10,
    color: '#FF0000',
    fontFamily: 'Arial'
  }
});
export default RainbowScreen;
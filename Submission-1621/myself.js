import React from 'react';
import { StyleSheet, Text, View ,Button, Alert ,Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      
        <Image source={require('./my.jpg')} style={{width: 200, height: 200}} />
        <Text>Hallo  I am 
          <Text style={styles.name}>Tharindu Dewasiri </Text>
        </Text>
        <Text>iAMDT - <Text style={styles.name}>1621</Text> </Text>
      <Button
          title="About me"
          onPress={() => Alert.alert('welcome to my page')}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  name:{
    fontWeight: 'bold',
  }
});


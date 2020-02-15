import * as React from 'react';
import { StatusBar, View, Image, Text, Button, Alert, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


export default class App extends React.Component {
  render() {
    return ( 
<LinearGradient colors={['#00002b','#764ba9']} style={{ flex:1 }}>
  <StatusBar barStyle="light-content" />
  
  

    <View style={styles.container}>
        <Text style={styles.vistacss}>
          Vista 
          <Text style={styles.litecss}>
            Lite
          </Text>
        </Text>
        <Text style={styles.discription}>Comming Soon Movie </Text>
        <Image source={require('./poster.jpg')} style={styles.imgcss} />
        <Text style={styles.filmnamecss}>Mary Queen of Scots </Text>
        <Text style={styles.timecss}>10.30am </Text>
        <Text style={styles.timecss}>1.00pm </Text>
        <Text style={styles.timecss}>3.30pm </Text>
        <Text style={styles.timecss}>5.30pm </Text>
        <Text style={styles.timecss}>7.30pm </Text>
        
      <Button
          title="Buy Tickets"
          onPress={() => Alert.alert('Comming Soon')}
        />
    </View>

    

</LinearGradient>


    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  vistacss:{
    fontWeight: 'bold',
    color: 'blue',
    fontSize: 30
    },

  litecss:{
    color: 'red'
  },

  discription:{
    color: 'white'
  },

  imgcss:{
    width: 250,
    height: 350,
    borderColor:'black',
    borderWidth:2
    },

   filmnamecss:{
     fontWeight: 'bold',
     fontSize: 15
     }, 

   timecss:{
     color:'white',
     opacity:0.3
     }
});
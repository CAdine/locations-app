/*This is an Example of React Native Map*/
import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import MapView from 'react-native-maps';
 
export default class App extends React.Component {

  constructor(props) {
    super(props)
      this.setState({
        region: {

          latitude: 37.78825, 
          longitude: -122.4324, 
          latitudeDelta: 0.0922, 
          longitudeDelta: 0.0421
          
        }
      })
  
  }
  

  vancouver = () => this.setState ({
    latitude: 49.2827,
    longitude: 123.1207, 
    latitudeDelta: 0.1,
    longitudeDelta: 0.1,

  })

  toronto = () => this.setState ({
    latitude: 43.6532,
    longitude: 79.3832, 
    latitudeDelta: 0.1,
    longitudeDelta: 0.1,
  })

  losangeles = () => this.setState ({
    latitude: 34.0522,
    longitude: 118.2437, 
    latitudeDelta: 0.1,
    longitudeDelta: 0.1,
  }) 

  paris = () => this.setState ({

    latitude: 48.8566,
    longitude: 2.3522, 
    latitudeDelta: 0.1,
    longitudeDelta: 0.1,
  })

  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={{
            
          }}
        />
        <View style = {styles.buttonV}> 
          <Button onPress = {this.vancouver}
          title = "Vancouver"/>
        </View>

        <View style = {styles.buttonT}> 
          <Button onPress = {this.toronto}
          title = "Toronto" />
        </View>

         <View style = {styles.buttonL}> 
          <Button onPress = {this.losangeles}
          title = "Los Angeles"/>
        </View>

        <View style = {styles.buttonP}> 
          <Button onPress = {this.paris}
          title = "Paris"/>
        </View>
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    position:'absolute',
    top:0,
    left:0,
    right:0,
    bottom:0,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  map: {
    position:'absolute',
    top:170,
    left:0,
    right:0,
    bottom:0,
  },
  buttonV: {
    position:'absolute',
    alignItems: 'center',
    top: 10, 
    paddingTop: 5,
    paddingBottom: 5, 
 
  },
   buttonT: {
    position:'absolute',
    alignItems: 'center',
    top: 45, 
    paddingTop: 5,
    paddingBottom: 5, 
 
  },
   buttonL: {
    position:'absolute',
    alignItems: 'center',
    top: 80, 
    paddingTop: 5,
    paddingBottom: 5, 
 
  },
   buttonP: {
    position:'absolute',
    alignItems: 'center',
    top: 110, 
    paddingTop: 5,
    paddingBottom: 5, 
 
  }
  
});
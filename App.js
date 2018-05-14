import React from 'react';
import { Constants, Audio } from 'expo';
import { Image, View, StyleSheet, Text, Button, Vibration, Alert, AppRegistry, Platform, Linking,
   TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback} from 'react-native';

export default class App extends React.Component {

  render() {

    return (
      <View style={styles.container}>
      <Image
        source={require('./LBN_Logo.png')}
        style={{width: 220, height:120}}
      />
      <Text style={{fontSize: 27, color: '#044c29', textAlign: 'center'}}>Learning Buddies Network Calming Application</Text>
      <Text style={{fontSize: 20, color: 'white', textAlign: 'center'}}>Activate Cellphone Vibrations</Text>
      <Image
        source={require('./476_-_Vibration_mode-512.png')}
        style={{width: 220, height:120}}
      />
       <Button
       style={{fontSize: 20, color: 'white'}}
       styleDisabled={{color: 'red'}}
       onPress={async () => {
          Vibration.vibrate(5000)
        }
      }
       title="Vibrate"
       >
       Press Me
       </Button>

        <Text style={{fontSize: 20, color: 'white', textAlign: 'center'}}>Activate Song Melody</Text>
        <Image
          source={require('./music_notes_stock_by_bassgeisha-d3h9mpv.jpg')}
          style={{width: 220, height:120}}
        />
        <Button
        style={{fontSize: 20, color: 'white'}}
        styleDisabled={{color: 'red'}}
        onPress={async () => {
            const source = {
              uri: "http://blogs.ubc.ca/anselhartanto/files/2018/04/musicEdSheeran.mp3"
            };

            try {
              await Audio.setIsEnabledAsync(true);
              const sound = new Audio.Sound();
              await sound.loadAsync(source);
              await sound.playAsync();
            } catch(error) {
              console.error(error);
            }
          }}
        title="Play Music"
        >
        Press Me
        </Button>


      </View>
    );
  }
}




const styles2 = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#09c168',
    borderTopWidth: 10,
    borderLeftWidth: 10,
    borderRightWidth: 10,
    borderBottomWidth: 10,
    borderColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Header } from 'react-native-elements';

export default class OutsideScreen extends React.Component {
    render() {
        return(
            <View>
                <Header
                    backgroundColor={'purple'}
                    centerComponent={{
                        text: 'What kind of game do you want to play?',
                        style: { color: 'white', fontSize: 20 },
                    }}
                />
                <TouchableOpacity                     
                onPress={() => {
                        this.props.navigation.navigate('BoardResultScreen');
                    }}>
                    <Text style = {styles.text1}>
                        Board game?
                    </Text>

                </TouchableOpacity>

                <TouchableOpacity                     
                onPress={() => {
                        this.props.navigation.navigate('VideoResultScreen');
                    }}>
                    <Text style = {styles.text}>
                       Video Game?
                    </Text>

                </TouchableOpacity>

            </View>
        )
    }
}
const styles = StyleSheet.create({
    text1:{
      color: 'black',
      padding: 20,
      fontSize: 22,
      fontWeight: 'bold',
      textAlign: 'center',
      borderWidth: 2,
      borderRadius: 15,
      justifyContent: 'center',
      alignSelf: 'center',
      borderWidth: 2,
      borderRadius: 15,
      marginTop: 50,
      width: 300,
      height: 100,
      backgroundColor: 'red',
    },
    text:{
        color: 'black',
        padding: 20,
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        borderWidth: 2,
        borderRadius: 15,
        justifyContent: 'center',
        alignSelf: 'center',
        borderWidth: 2,
        borderRadius: 15,
        marginTop: 50,
        width: 300,
        height: 100,
        backgroundColor: 'green',
      }
  });
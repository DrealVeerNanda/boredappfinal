import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Header } from 'react-native-elements';

export default class HomeScreen extends React.Component {
    render() {
        return(
            <View>
                
                <Header
                backgroundColor={'#9c8210'}
                centerComponent={{
                    text: 'Bored App',
                    style: { color: 'blue', fontSize: 40 },
            }}
            />

                <Text style = {styles.header}>
                    Select one of the options on every page to know what to do!
                </Text>

                <TouchableOpacity 
                style = {styles.button}                 
                onPress={() => {
                        this.props.navigation.navigate('ByYourSelfScreen');

                    }}>
                    <Text style = {styles.buttonText}>
                        By Yourself?
                    </Text>

                </TouchableOpacity>

                <TouchableOpacity
                style = {styles.button}                     
                onPress={() => {
                        this.props.navigation.navigate('WithAFriendScreen');

                    }}>
                    <Text style = {styles.buttonText}>
                        With A Friend?
                    </Text>

                </TouchableOpacity>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    button: {
      justifyContent: 'center',
      alignSelf: 'center',
      borderWidth: 2,
      borderRadius: 15,
      marginTop: 50,
      width: 200,
      height: 50,
      backgroundColor: 'red'
    },
    buttonText: {
      textAlign: 'center',
      color: 'black',
    },
    header: { 
        justifyContent: 'center',
        alignSelf: 'center',
        color: 'blue',
        textAlign: 'center',
        fontSize: 20
    }
  });
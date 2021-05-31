import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Header } from 'react-native-elements';

export default class TempIsColdScreen extends React.Component {
    render() {
        return(
            <View>
            <Header
                backgroundColor={'red'}
                centerComponent={{
                    text: 'Where will you play?',
                    style: { color: 'green', fontSize: 20 },
            }}
            />
                <TouchableOpacity                     
                onPress={() => {
                        this.props.navigation.navigate('InsideScreen');
                    }}>
                    <Text style = {styles.text1}>
                        Inside?
                    </Text>

                </TouchableOpacity>

                <TouchableOpacity                     
                onPress={() => {
                        this.props.navigation.navigate('OutsideScreen');
                    }}>
                    <Text style = {styles.text}>
                       Outside?
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
      backgroundColor: 'yellow',
    },
    text:{
        color: 'white',
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
        backgroundColor: 'blue',
      }
  });
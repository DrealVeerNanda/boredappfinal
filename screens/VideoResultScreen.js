import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Linking } from 'react-native';
import { Header } from 'react-native-elements';

export default class VideoResultScreen extends React.Component {
    
    render() {
        return(
            <View>  

            <Header
                backgroundColor={'green'}
                centerComponent={{
                    text: 'Good Video games!',
                    style: { color: 'white', fontSize: 20 },
            }}
            />
                <TouchableOpacity 
                    onPress={() => Linking.openURL('https://www.youtube.com/watch?v=MmB9b5njVbA')}
                >
                    <Text style = {styles.text}>
                    Minecraft is a great game where you can build!
                    </Text>
                    
                </TouchableOpacity>

                <TouchableOpacity 
                    onPress={() => Linking.openURL('https://www.youtube.com/watch?v=NSJ4cESNQfE')}
                >
                    <Text style = {styles.text}>
                        Amoung us is a very fun mystery game.
                    </Text>

                </TouchableOpacity>   

                <TouchableOpacity 
                    onPress={() => Linking.openURL('https://www.youtube.com/watch?v=vzHrjOMfHPY')}
                >

                <Text style = {styles.text}>
                    League of Legends is a fun fps game!
                </Text>

                </TouchableOpacity>

                <TouchableOpacity 
                    onPress={()=> Linking.openURL('https://www.youtube.com/watch?v=H77Zfzy4LWw')}
                >

                <Text style = {styles.text}>
                    Terraria is a 2d game similar to Minecraft in many ways.
                </Text>

                </TouchableOpacity>
                <TouchableOpacity                     
                onPress={() => {
                        this.props.navigation.navigate('HomeScreen');
                    }}>
                    <Text style = {styles.text1}>
                        BACK
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}
const styles = StyleSheet.create({
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
      backgroundColor: 'brown',
    },
    text1:{
        color: 'black',
        padding: 20,
        fontWeight: 'bold',
        fontSize: 15,
        fontFamily: 'notoserif',
        textAlign: 'center',
        borderWidth: 2,
        borderRadius: 15,
        justifyContent: 'center',
        alignSelf: 'center',
        borderWidth: 2,
        borderRadius: 15,
        marginTop: 50,
        width: 200,
        height: 56,
        backgroundColor: 'brown',
        
      },
  });

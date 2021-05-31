import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Linking } from 'react-native';
import { Header } from 'react-native-elements';

export default class BoardResultScreen extends React.Component {
    
    render() {
        return(
            <View>  
            <Header
                backgroundColor={'blue'}
                centerComponent={{
                    text: 'Good Board games!',
                    style: { color: 'white', fontSize: 20 },
            }}
            />
                <TouchableOpacity
                    onPress={() => Linking.openURL('https://www.indiegogo.com/projects/very-good-puzzle#/') }
                >

                <Text style = {styles.text}>
                    Puzzle(s)! Puzzles are great board games!
                </Text>

                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => Linking.openURL('https://www.youtube.com/watch?v=OCSbzArwB10') }
                >

                <Text style = {styles.text}>
                    Chess! You can play chess with a friend or by yourself!
                </Text>
                
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => Linking.openURL('https://www.youtube.com/watch?v=FNEW6ZqMG1E') }
                >

                <Text style = {styles.text}>
                    The Seventh Continent is a good game to play!
                </Text>

                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => Linking.openURL('https://www.youtube.com/watch?v=KQDxV3hAfic') }
                >
                
                <Text style = {styles.text}>
                    A Feast for Oden is a classic game you can play!
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
    fontSize: 17,
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
    backgroundColor: 'aqua',
  },
  text1:{
    color: 'black',
    padding: 20,
    fontSize: 13,
    fontWeight: 'bold',
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
    backgroundColor: 'aqua',
  }
});
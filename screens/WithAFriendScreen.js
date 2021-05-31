import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Header } from 'react-native-elements';

export default class WithAFriendScreen extends React.Component {
    render() {
        return(
            <View>
            <Header
                backgroundColor={'yellow'}
                centerComponent={{
                    text: 'Temperature',
                    style: { color: 'black', fontSize: 20 },
            }}
            />
                <TouchableOpacity                     
                onPress={() => {
                        this.props.navigation.navigate('TempIsHotScreen');
                    }}>
                    <Text style = {styles.text}>
                        Is it hot?
                    </Text>

                </TouchableOpacity>

                <TouchableOpacity                    
                onPress={() => {
                        this.props.navigation.navigate('TempIsMildScreen');
                    }}>
                    <Text style = {styles.text}>
                       Is it mild?
                    </Text>

                </TouchableOpacity>

                <TouchableOpacity                     
                onPress={() => {
                        this.props.navigation.navigate('TempIsColdScreen');
                    }}>
                    <Text style = {styles.text}>
                       Is it cold?
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
      backgroundColor: 'pink',
    }
  });
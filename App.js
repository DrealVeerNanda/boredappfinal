import * as React from 'react';
import { View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import { createAppContainer, createSwitchNavigator} from 'react-navigation'; 
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ByYourSelfScreen from './screens/ByYourselfScreen'; 
import WithAFriendScreen from './screens/WithAFriendScreen';
import TempIsMildScreen from './screens/TempIsMildScreen';
import TempIsHotScreen from  './screens/TempIsHotScreen';
import TempIsColdScreen from './screens/TempIsColdScree';
import InsideScreen from './screens/InsideScreen';
import OutsideScreen from './screens/OutsideScreen';
import BoardResultScreen from './screens/BoardResultScreen';
import VideoResultScreen from './screens/VideoResultScreen'; 

export default class App extends React.Component {
  render() {
    return (
      <SafeAreaProvider>
      <View>
        <AppContainer/>
      </View>
      </SafeAreaProvider>
    );
  }
}

var AppNavigator = createSwitchNavigator({
  HomeScreen: HomeScreen,
  ByYourSelfScreen: ByYourSelfScreen,
  WithAFriendScreen: WithAFriendScreen,
  TempIsMildScreen: TempIsMildScreen,
  TempIsHotScreen: TempIsHotScreen,
  TempIsColdScreen: TempIsColdScreen,
  InsideScreen: InsideScreen,
  OutsideScreen: OutsideScreen,
  BoardResultScreen: BoardResultScreen,
  VideoResultScreen: VideoResultScreen
})

const AppContainer = createAppContainer(AppNavigator);

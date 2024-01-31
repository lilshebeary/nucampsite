import { StyleSheet, View, Platform } from 'react-native';
import Constants from 'expo-constants';
import DirectoryScreen from './DirectoryScreen';
import CampsiteInfoScreen from './CampsiteInfoScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './HomeScreen';

const screenOptions = {
  headerStyle: { backgroundColor: '#5637DD' },
  headerTintColor: '#fff'
}

const HomeNavigator = () => {
  const Stack = createStackNavigator();
  return(
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen 
        name='Home'
        component={HomeScreen}
        options={{ title: 'Home' }}
      />
    </Stack.Navigator>
  )
}

const DirectoryNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName='Directory'
      screenOptions={screenOptions}
    >
        <Stack.Screen
         name='Directory'
         component={DirectoryScreen}
         options={{ title: 'Campsite Directory' }}
      />
      <Stack.Screen
        name='CampsiteInfo'
        component={CampsiteInfoScreen}
        options={({ route }) => ({
          title: route.params.campsite.name
        })}
      />
    </Stack.Navigator>
  )
}

const Main = () => {
  return (
    <View style={{ 
      flex: 1,
      paddingTop: 
        Platform.OS === 'ios' ? 0 : Constants.statusBarHeight,
     }}
     >
      <DirectoryNavigator />
    </View>
      
  )
}

export default Main;

const styles = StyleSheet.create({})
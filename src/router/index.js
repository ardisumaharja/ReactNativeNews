import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DetailNews, ListNews, Login, SplashScreen } from '../pages';

const Stack = createStackNavigator(); 
const Tab = createBottomTabNavigator(); 

const Router = () => {
    return(
        <Stack.Navigator initialRouteName="SplashScreen" headerMode='none'>
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="ListNews" component={ListNews}/>
            <Stack.Screen name="DetailNews" component={DetailNews}/>
            <Stack.Screen name="SplashScreen" component={SplashScreen}/>
        </Stack.Navigator>
    )
}

export default Router;
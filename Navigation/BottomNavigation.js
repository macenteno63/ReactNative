import React from 'react';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {NavigationContainer} from "@react-navigation/native";
import Navigation from "./Navigation";


const BottomNavigation = () => {

    const BottomTabNavigator = createBottomTabNavigator();

    return (
        <NavigationContainer>
            <BottomTabNavigator.Navigator initialRouteName="Home">
                <BottomTabNavigator.Screen name="Home" component={Navigation} 
                                           options={{
                                                headerShown: false,
                                           }} />
            </BottomTabNavigator.Navigator>
        </NavigationContainer>
    );
}

export default BottomNavigation;
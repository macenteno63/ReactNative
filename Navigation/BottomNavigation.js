import React from 'react';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {NavigationContainer} from "@react-navigation/native";
import Navigation from "./Navigation";
import ContainerFavoris from "../component/ContainerFavoris";
import Research from "../component/Research";


const BottomNavigation = () => {

    const BottomTabNavigator = createBottomTabNavigator();

    return (
        <NavigationContainer>
            <BottomTabNavigator.Navigator initialRouteName="Home">
                <BottomTabNavigator.Screen name="Home" component={Navigation} 
                                           options={{
                                                headerShown: false,
                                           }} />
                <BottomTabNavigator.Screen name={"Fav"} component={ContainerFavoris}/>
                <BottomTabNavigator.Screen name={"Research"} component={Research}/>
            </BottomTabNavigator.Navigator>
        </NavigationContainer>
    );
}

export default BottomNavigation;
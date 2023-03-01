import React from 'react';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {NavigationContainer} from "@react-navigation/native";
import Navigation from "./Navigation";
import ContainerFavoris from "../component/ContainerFavoris";
import Research from "../component/Research";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { Fontisto } from '@expo/vector-icons';



const BottomNavigation = () => {

    const BottomTabNavigator = createBottomTabNavigator();

    return (
        <NavigationContainer>
            <BottomTabNavigator.Navigator initialRouteName="Home">
                <BottomTabNavigator.Screen name="Home" component={Navigation} 
                                           options={{
                                                headerShown: false,
                                                title: 'Home',
                                                tabBarIcon: ({color, size}) => <FontAwesome name="home" size={size} color={color} />,
                                           }} />
                <BottomTabNavigator.Screen name={"Fav"} component={ContainerFavoris}
                                            options={{
                                                title: 'Favoris',
                                                tabBarIcon: ({color, size}) => <Fontisto name="favorite" size={size} color={color} />,
                                            }}/>
                <BottomTabNavigator.Screen name={"Research"} component={Research}
                                            options={{
                                                title: 'Recherche',
                                                tabBarIcon: ({color, size}) => <FontAwesome name="search" size={size} color={color} />,
                                            }} />
            </BottomTabNavigator.Navigator>
        </NavigationContainer>
    );
}


export default BottomNavigation;
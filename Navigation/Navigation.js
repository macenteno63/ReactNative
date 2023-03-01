import React from 'react';
import home from "../component/Home";
import cardDetail from "../component/CardDetail"
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";

const Navigation = () => {
    const Stack = createStackNavigator();
    return (
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={home}
                              options={{
                                  headerShown: false,
                              }} />
                <Stack.Screen name="RecetteDetail" component={cardDetail}/>
            </Stack.Navigator>
    );
};

export default Navigation;
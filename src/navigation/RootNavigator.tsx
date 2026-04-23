import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabNavigator from "./BottomTabNavigator";
import EntryDetailScreen from "../screens/EntryDetailScreen";
import SplashScreen from "../screens/SplashScreen";
const Stack = createNativeStackNavigator();
//Stack objet has two parts screen and navigator(container)
const RootNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Splash"
                    component={SplashScreen}
                    options={{ headerShown: false }} />
                <Stack.Screen
                    name="BottomTabs"
                    component={BottomTabNavigator}
                    options={{ headerShown: false }} />
                <Stack.Screen
                    name="EntryDetail"
                    component={EntryDetailScreen}
                    options={{ headerShown: true, title: "Entry Detail" }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
export default RootNavigator;

import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import AddEntryScreen from '../screens/AddEntryScreen';
import SearchScreen from '../screens/SearchScreen';
import SettingsScreen from '../screens/SettingsScreen';
import { darkTheme } from "../themes/theme";
import MaterialIcons from "@react-native-vector-icons/material-icons";
const Tab = createBottomTabNavigator();
const theme = darkTheme;
const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: theme.backgroundElevated,
                    borderTopColor: theme.border,
                    borderTopWidth: 0.5,

                },
                tabBarActiveTintColor: theme.primary,
                tabBarInactiveTintColor: theme.textFaint,
                tabBarLabelStyle: {
                    fontSize: 11,
                    fontWeight: '500'
                }
            }}>
            <Tab.Screen name="Home" component={HomeScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="home" size={size} color={color} />
                    )
                }} />
            <Tab.Screen name="Add" component={AddEntryScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="add-circle-outline" size={size} color={color} />
                    )
                }} />
            <Tab.Screen name="Search" component={SearchScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="search" size={size} color={color} />
                    )
                }} />
            <Tab.Screen name="Settings" component={SettingsScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="settings" size={size} color={color} />
                    )
                }} />
        </Tab.Navigator>
    );
};
export default BottomTabNavigator;
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import GlobalStyle from '../Style/Global';
import { IgnoredMatches, PeopleWLU, TobBar } from '../Components';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

const Likes = () => {
    return (
        <View style={GlobalStyle.screenBG}>
            <TobBar />
            <Tab.Navigator
                screenOptions={{
                    tabBarActiveTintColor: '#00A8B6',
                    tabBarInactiveTintColor: 'white',
                    tabBarPressColor: 'transparent',
                    tabBarIndicatorStyle: {
                        backgroundColor: '#00A8B6',
                    },
                    tabBarLabelStyle: {
                        textTransform: 'none',
                    },
                    tabBarStyle: {
                        backgroundColor: GlobalStyle.screenBG,
                    },
                    swipeEnabled: false,
                    
                }}
            >
                <Tab.Screen name='People Who Like You' component={PeopleWLU} />
                <Tab.Screen name='Ignored Match' component={IgnoredMatches} />
            </Tab.Navigator>
        </View>
    );
};

export default Likes;

const Style = StyleSheet.create({});

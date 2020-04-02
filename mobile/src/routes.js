import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Pokedex from './pages/Pokedex';
import Details from './pages/Details';

export default function Routes() {
    return (
        <NavigationContainer>
            <AppStack.Navigator>
                <AppStack.Screen name="Pokedex"  component={Pokedex} />
                <AppStack.Screen name="Details"  component={Details} />
            </AppStack.Navigator>
        </NavigationContainer>
    );
}
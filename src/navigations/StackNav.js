import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

import Home from '../screens/Home';
import Details from '../screens/Details';

const StackNav = StackNavigator(
    {
        Home: Home,
        Details: Details
    }
);

export default StackNav;
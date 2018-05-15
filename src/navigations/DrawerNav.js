import React, { Component } from 'react';
import { DrawerNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import StackNav from './StackNav';

const DrawerNav = DrawerNavigator(
    {
        MyDay: {
            screen: StackNav,
            navigationOptions: {
                drawerLabel: "My Day",
                drawerIcon: ({ tintColor }) => <Icon name="rocket" size={24} />
            },
        }
    }
);

export default DrawerNav;
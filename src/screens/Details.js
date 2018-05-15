import React, { Component } from 'react';
import {  View, Text, Button } from 'react-native';

export default class Details extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Details'
        };
    };

    render() {
        const { navigate, goBack } = this.props.navigation;
        return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text> Welcome to Home Screen </Text>
            <Button
                title='Go to Details'
                onPress={() => goBack()} />
        </View>
        );
    }
}

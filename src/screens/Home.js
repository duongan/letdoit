import React, { Component } from 'react';
import {  View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import IOSIcon from "react-native-vector-icons/Ionicons";

export default class Home extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Home',
            headerLeft: (
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <IOSIcon name="ios-menu" size={30} color="#000" />
                </TouchableOpacity>
            ),
            headerStyle: {
                paddingRight: 10,
                paddingLeft: 10
            }
        };
    };

    render() {
        const { navigate } = this.props.navigation;
        const a = () => {
            return fetch('http://52.70.218.113/api/todos').then(res => {
                return res.json();
            }).then(resJSON => {
                console.log(resJSON);
                return resJSON;
            }).catch(err => {
                console.log(err);
                throw err;
            });
        }
        a().then(data => {
            //console.log(data);
        });
        return (
        <View style={styles.container}>
            {/* <FlatList
                data={}
                renderItem={}
                keyExtractor={} /> */}
        </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'blue'
    }
});

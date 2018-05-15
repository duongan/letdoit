import React, { Component } from 'react';
import {  View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import IOSIcon from "react-native-vector-icons/Ionicons";

import { startFetchTodo, fetchToDoSuccess, fetchToDoError } from '../actions/actionCreator';

class Home extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title: 'My Day',
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

    componentDidMount() {
        const a = () => {
            return fetch('https://let-do-it.herokuapp.com/api/todos').then(res => {
                return res.json();
            }).then(resJSON => {
                return resJSON;
            }).catch(err => {
                throw err;
            });
        }
        a().then(data => {
            this.props.fetchToDoSuccess(data.data);
        });
    }

    render() {
        //this.props.startFetchTodo();
        console.log(this.props);
        const { navigate } = this.props.navigation;
        const { todos } = this.props;
        return (
        <View style={styles.container}>
            <FlatList
                data={todos}
                renderItem={({item}) => (
                    <View style={styles.container}>
                        <Text>{item.name}</Text>
                    </View>
                )}
                keyExtractor={(item) => item._id} />
        </View>
        );
    }
}

const mapStateToProps = (state) => {
    return { todos: state.todos };
};

export default connect(mapStateToProps, { startFetchTodo, fetchToDoSuccess, fetchToDoError })(Home);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

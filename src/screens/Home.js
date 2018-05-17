import React, { Component } from 'react';
import {  View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import IOSIcon from "react-native-vector-icons/Ionicons";

import { startRequest, fetchToDoSuccess, fetchToDoError } from '../actions/actions';
import { getTodos } from '../api/index';
import ToDoItem from '../components/ToDoItem';

class Home extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title: 'My Day',
            headerLeft: (
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <IOSIcon name="ios-menu" size={30} color="#000" />
                </TouchableOpacity>
            ),
            headerRight: (
                <TouchableOpacity onPress={() => navigation.navigate('Details')}>
                    <Text style={{ fontSize: 15, color: '#000' }}> ADD </Text>
                </TouchableOpacity>
            ),
            headerStyle: {
                paddingRight: 10,
                paddingLeft: 10
            }
        };
    };

    componentDidMount() {
        this.props.startRequest();
        this._getTodoList();
    }

    _getTodoList() {
        getTodos().then(result => {
            this.props.fetchToDoSuccess(result.data);
        });
    }

    render() {
        const { navigate } = this.props.navigation;
        const { todos, isLoading } = this.props;
        return (
        <View style={styles.container}>
            <FlatList style={{ alignSelf: 'stretch' }}
                data={todos}
                renderItem={({item}) => (
                    <ToDoItem data={item} />
                )}
                keyExtractor={(item) => item._id}
                extraData={this.state}
                refreshing={isLoading}
                onRefresh={() => { this._getTodoList() }} />
        </View>
        );
    }
}

const mapStateToProps = (state) => {
    return { todos: state.todos, isLoading: state.isLoading };
};

export default connect(mapStateToProps, { startRequest, fetchToDoSuccess, fetchToDoError })(Home);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

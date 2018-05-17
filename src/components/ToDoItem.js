import React, { Component } from 'react';
import {  View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import * as api from '../api/index';

class ToDoItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: {}
        };
    }

    componentDidMount() {
        this.setState({ data: this.props.data });
    }

    _changeStatus(todo) {
        const { startRequest, updateTodoSuccess } = this.props;
        startRequest();
        if (todo) {
            todo.completed = !todo.completed;
            api.updateTodo(todo).then(response => {
                updateTodoSuccess(todo);
                this.setState({
                    data: this.props.data
                });
            });
            
        }
    }

    render() {
        const { data } = this.state;
        return (
            <View style={styles.container}>
                <View style={{ flex: 8 }}>
                    <Text style={styles.name}> {data.name} </Text>
                    <Text style={styles.note}> {data.note} </Text>
                    <Text style={styles.note}>{data.completed ? 'Done' : 'Not done yet'} </Text>
                </View>
                <View style={{ flex: 2, justifyContent: 'center' }}>
                    <TouchableOpacity style={styles.statusButton} onPress={() => this._changeStatus(data)}>
                        <Text style={styles.statusBtnTitle}>{data.completed ? 'Undone' : 'Done'}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default connect(null, actions)(ToDoItem);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        marginHorizontal: 10,
    },
    name: {
        fontSize: 17,
        fontWeight: 'bold'
    },
    note: {
        fontSize: 14,
        fontStyle: 'italic',
    },
    statusButton: {
        backgroundColor: 'burlywood',
        height: '50%',
        justifyContent: 'center',
        borderRadius: 5
    },
    statusBtnTitle: {
        textAlign: 'center',
        fontSize: 13,
        fontWeight: 'bold'
    }
});
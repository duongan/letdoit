import React, { Component } from 'react';
import {  View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

class ToDoItem extends Component {

    _changeStatus(todo) {
        if (todo) {
            todo.completed = !todo.completed;
            this.props.updateTodoStatus(todo);
        }
    }

    render() {
        const { data } = this.props;
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
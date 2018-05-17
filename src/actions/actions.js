import * as actionTypes from './actionTypes';

export function startRequest() {
    return {
        type: actionTypes.START_REQUEST
    };
}

export function fetchToDoSuccess(todos) {
    return {
        type: actionTypes.TODOS_REQUEST_SUCCESS,
        todos
    };
}

export function fetchToDoError() {
    return {
        type: actionTypes.TODOS_REQUEST_FAILURE
    };
}

export function updateTodoSuccess(todo) {
    return {
        type: actionTypes.UPDATE_TODO_SUCCESS,
        todo
    }
}
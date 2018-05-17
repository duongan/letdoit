import * as actionTypes from './actionTypes';

export function startFetchTodo() {
    return {
        type: actionTypes.TODOS_REQUEST
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

export function updateTodoStatus(todo) {
    return {
        type: actionTypes.TODO_CREATE_UPDATE_REQUEST,
        todo
    };
}
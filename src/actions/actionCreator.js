export function startFetchTodo() {
    return {
        type: 'START_FETCH_TODOS'
    };
}

export function fetchToDoSuccess(todos) {
    return {
        type: 'FETCH_TODOS_SUCCESS',
        todos
    };
}

export function fetchToDoError() {
    return {
        type: 'FETCH_TODOS_ERROR'
    };
}
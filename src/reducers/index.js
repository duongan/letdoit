import * as actionTypes from '../actions/actionTypes';

const initialState = {
    todos: [],
    isLoading: false,
    hasError: false
};
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.TODOS_REQUEST:
            return { todos: [], isLoading: true, hasError: false };
        case actionTypes.TODOS_REQUEST_SUCCESS:
            return { todos: action.todos, isLoading: false, hasError: false};
        case actionTypes.TODOS_REQUEST_FAILURE:
            return { todos: [], isLoading: false, hasError: true };
        case actionTypes.TODO_CREATE_UPDATE_REQUEST:
            return { ...state, todos: state.todos.map((item) => {
                if (item._id === action.todo._id) {
                    item.completed = action.todo.completed;
                }
                return item;
            }) };
    }
    return state;
};
export default reducer;

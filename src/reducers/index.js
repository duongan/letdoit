import * as actionTypes from '../actions/actionTypes';

const initialState = {
    todos: [],
    isLoading: false,
    hasError: false
};
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.START_REQUEST:
            return { ...state, isLoading: true };
        case actionTypes.TODOS_REQUEST_SUCCESS:
            return { todos: action.todos, isLoading: false, hasError: false};
        case actionTypes.TODOS_REQUEST_FAILURE:
            return { todos: [], isLoading: false, hasError: true };
        case actionTypes.UPDATE_TODO_SUCCESS:
            return { ...state, isLoading: false, todos: state.todos.map((item) => {
                if (item._id === action.todo._id) {
                    item.completed = action.todo.completed;
                }
                return item;
            }) };
    }
    return state;
};
export default reducer;

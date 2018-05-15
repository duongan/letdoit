const initialState = {
    todos: [{ _id: '5af92b89801cfc0a94e3ff4f', name: 'test' }],
    isLoading: false,
    hasError: false
};
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'START_FETCH_TODOS':
            return { todos: [], isLoading: true, hasError: false };
        case 'FETCH_TODOS_SUCCESS':
            return { todos: action.todos, isLoading: false, hasError: false};
        case 'FETCH_TODOS_ERROR':
            return { todos: [], isLoading: false, hasError: true };
    }
    return state;
};
export default reducer;

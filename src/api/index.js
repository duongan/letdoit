//const API_ROOT = 'http://localhost:3000/api';
const API_ROOT = 'https://let-do-it.herokuapp.com/api';

export const getTodos = () => {
    return fetch(`${API_ROOT}/todos`).then(res => {
        return res.json();
    }).then(resJSON => {
        return resJSON;
    }).catch(err => {
        throw err;
    });
};

export const updateTodo = (todo) => {
    const uri = `${API_ROOT}/todo/create`;
    const configs = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(todo)
    };
    return fetch(uri, configs).then(res =>{
        return res.json();
    }).then(resJSON => {
        return resJSON;
    }).catch(error => {
        throw error;
    });
};
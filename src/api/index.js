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
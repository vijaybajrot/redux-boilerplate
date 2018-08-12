import axios from 'axios';

const addTodo = (text) => {
    return {
        type: 'ADD_TODO',
        payload: text
    }
};

// Get Data by Thunk Middleware

// const getTodos = () => {
//     return (dispatch) => {
//         axios.get('https://jsonplaceholder.typicode.com/posts')
//             .then((response) => {
//                 return dispatch({
//                     type: 'GET_TODOS',
//                     payload: response.data
//                 });
//             }).catch((e) => {
//                 console.log(e);
//             })
//     }
// };

const getTodos = () => {
    return {
        type: 'GET_TODOS',
        payload: axios.get('https://jsonplaceholder.typicode.com/posts')
    }
};

export {
    addTodo,
    getTodos
};
import { ADD_TODO, GET_TODOS, GET_TODOS_FULFILLED } from '../action-types/todos';


const todos = (state = [], action) => {
    switch (action.type) {
        case GET_TODOS_FULFILLED:
            return [
                ...state,
                ...action.payload.data
            ];
        case ADD_TODO:
            return [
                ...state,
                action.payload
            ];

        default:
            return state;
    }
};

export default todos;
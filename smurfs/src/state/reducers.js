import * as types from './actionTypes';

const initialSmurfs = [{ name: 'dimeji', age: 12, height: '12cm', id: 0 }]


export function smurfsReducer(state = initialSmurfs, action) {
    switch (action.type) {
        case types.ADD_SMURFS:
            return action.payload;
        default:
            return state;
    }
}


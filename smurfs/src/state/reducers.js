import * as types from './actionTypes';

const initialSmurfs = [{ name: 'dimeji', age: 12, height: '12cm', id: 0 }]

const initialSmurfForm = {name: '', age: '', height: '', id: ''}


export function smurfsReducer(state = initialSmurfs, action) {
    switch (action.type) {
        case types.ADD_SMURFS:
            return action.payload;
        default:
            return state;
    }
}

export function smurfFormReducer(state=initialSmurfForm, action){
    switch (action.type) {
        case types.ON_INPUT_CHANGE:
            return {
                ...state, [action.payload.name]: action.payload.value
            }
        case types.ON_SUBMIT:
                return initialSmurfForm;
        default:
            return state;
    }
}


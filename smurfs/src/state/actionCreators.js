import axios from 'axios';
import * as types from './actionTypes';

const smurfsApi = 'http://localhost:3333/smurfs'

export const addSmurfs = smurf => {
    return {
        type: types.ADD_SMURFS,
        payload: smurf
    }
}

export const getSmurfs = () => dispatch => {
    axios.get(smurfsApi)
        .then(res => {
            dispatch(addSmurfs(res.data))
        })
}
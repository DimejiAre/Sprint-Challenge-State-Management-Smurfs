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

export const getFormValue = event => {
    if(event.target.name === 'age'){
        return {
            type: types.ON_INPUT_CHANGE,
            payload: {name: event.target.name, value: Number(event.target.value)}
        }
    }
    return {
        type: types.ON_INPUT_CHANGE,
        payload: {name: event.target.name, value: event.target.value}
    }
}

export const postSmurfs = (smurf) => dispatch => {
    const params = {
        name: smurf.name,
        age: smurf.age,
        height: smurf.height
      }
    axios.post(smurfsApi, params)
    .then(res =>{
        dispatch(addSmurfs(res.data))
        dispatch({type: types.ON_SUBMIT})
    })
}

export const editSmurfs = (smurf) => dispatch => {
    debugger
    const params = {
        id: Number(smurf.id),
        name: smurf.name,
        age: Number(smurf.age),
        height: smurf.height
      }
    axios.put(smurfsApi + '/' + smurf.id, params)
    .then(res =>{
        dispatch(addSmurfs(res.data))
        dispatch({type: types.ON_SUBMIT})
    })
}
import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../state/actionCreators';

export function Smurf(props) {
    const { smurf, editFormValue, removeSmurfs } = props;

    const edit = smurf => event => {
        event.preventDefault();
        editFormValue(smurf);
    }

    const remove = smurf => event => {
        event.preventDefault();
        removeSmurfs(smurf)
    }

    return (
        <div className='smurf'>
            <h2>{smurf.name}</h2>
            <p>Height: {smurf.height}</p>
            <p>Age: {smurf.age}</p>
            <p>ID: {smurf.id}</p>
            <button onClick={edit(smurf)}>Edit</button>
            <button onClick={remove(smurf)}>Delete</button>
        </div>
    )
}

export default connect(
    state => state,
    actionCreators
)(Smurf);
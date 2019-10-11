import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../state/actionCreators';

export function Smurf(props) {
    const { smurf } = props;
    return (
        <div className='smurf'>
            <h2>{smurf.name}</h2>
            <p>Height: {smurf.height}</p>
            <p>Age: {smurf.age}</p>
            <p>ID: {smurf.id}</p>
        </div>
    )
}

export default connect(
    state => state,
    actionCreators
)(Smurf);
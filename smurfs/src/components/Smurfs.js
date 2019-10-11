import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../state/actionCreators';
import Smurf from './Smurf';

export function Smurfs(props){
    const {smurfs} = props;
    return (
        <div className='smurfs'>
            {
                smurfs?
                smurfs.map(smurf => (
                    <Smurf smurf={smurf}/>
                ))
                : null
            }
        </div>
    )
}

export default connect(
    state => state,
    actionCreators
)(Smurfs);
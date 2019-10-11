import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../state/actionCreators';
import Smurf from './Smurf';
import '../scss/Smurfs.scss';

export function Smurfs(props) {
    const { smurfs, getSmurfs } = props;

    useEffect(() => {
        getSmurfs()
    }, [])

    return (
        <div className='smurfs'>
            {
                smurfs ?
                    smurfs.map(smurf => (
                        <Smurf key={smurf.id} smurf={smurf} />
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
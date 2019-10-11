import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../state/actionCreators';
import '../scss/SmurfForm.scss';

export function SmurfForm(props) {
    const {getFormValue, postSmurfs, smurfForm} = props;
    
    const submit = smurfForm => event => {
        event.preventDefault()
        postSmurfs(smurfForm)
    };

    return (
        <form className='smurf-form'>
            <fieldset>
            <legend>Add Smurf</legend>
            <label htmlFor='name'>Name</label>
            <input value={smurfForm.name} onChange={getFormValue} name='name' type='text' />
            <label htmlFor='age'>Age</label>
            <input value={smurfForm.age} onChange={getFormValue} name='age' type='text' />
            <label htmlFor='height'>height</label>
            <input value={smurfForm.height} onChange={getFormValue} name='height' type='text' />
            <button onClick={submit(smurfForm)}>Submit</button>
            </fieldset>
        </form>
    )
}

export default connect(
    state => state,
    actionCreators
)(SmurfForm);
import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../state/actionCreators';
import '../scss/SmurfForm.scss';

export function SmurfForm(props) {
    const { getFormValue, postSmurfs, smurfForm, editSmurfs, removeSmurfs } = props;

    const submit = smurfForm => event => {
        event.preventDefault()
        postSmurfs(smurfForm)
    };

    const edit = smurfForm => event => {
        event.preventDefault()
        editSmurfs(smurfForm)
    };

    const remove = smurfForm => event => {
        event.preventDefault()
        removeSmurfs(smurfForm)
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
                <hr />
                <label htmlFor='id'>Enter ID for Edit and Delete:</label>
                <input id='id' value={smurfForm.id} onChange={getFormValue} name='id' type='text' />
                <div>
                    <button onClick={edit(smurfForm)}>Edit</button>
                    <button onClick={remove(smurfForm)}>Delete</button>
                </div>
                
            </fieldset>
        </form>
    )
}

export default connect(
    state => state,
    actionCreators
)(SmurfForm);
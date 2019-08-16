import React, { useState } from "react";

import { postSmurf } from './actions/actions'

const SmurfForm = props => {
    const[newSmurf, setNewSmurf] = useState([{ name: '', age: 0, height: '', id: 0 }])
    
    const handleChange = event => {
        event.preventDefault();
        setNewSmurf({
            ...newSmurf, [event.target.name]: event.target.value
        })
    }

    const addSmurf = event => {
        event.preventDefault()
        props.postSmurf(newSmurf)
        setNewSmurf({ name: '', age: 0, height: ''})
    }
    

    return (
        <div>
            <form onSubmit={addSmurf}>
                <input type="text" placeholder='Smurf Name'  />
                <input type="number" placeholder='Smurf Age' />
                <input type="text" placeholder='Smurf Height'  />
            </form>
            <button onClick={postSmurf}>Add Smurf</button>
        </div>
    )
}

export default SmurfForm


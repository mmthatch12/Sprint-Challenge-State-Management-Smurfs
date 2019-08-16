import React, { useState } from "react";
import { connect } from "react-redux";


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
            <form onSubmit={() => console.log(newSmurf)}>
                <input type="text" value={newSmurf.name} name='name' onChange={handleChange} placeholder='Smurf Name'  />
                <input type="number" value={newSmurf.age} name='age' onChange={handleChange} placeholder='Smurf Age' />
                <input type="text" value={newSmurf.height} name='height' onChange={handleChange} placeholder='Smurf Height'  />
            </form>
            <button onClick={props.postSmurf}>Add Smurf</button>
        </div>
    )
}

export default connect(null, { postSmurf })(SmurfForm)


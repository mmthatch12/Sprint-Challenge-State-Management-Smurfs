import React, { useState } from "react";



const SmurfForm = props => {
    
    const [newSmurf, setNewSmurf] = useState([{ name: '', age: 0, height: '', id: 0 }])

    const handleChanges = event => {
        setNewSmurf({...newSmurf,
            [event.target.name]: event.target.value
        })
    }

    const submitSmurf = event => {
        event.preventDefault()

    }

    const addSmurf


    return (
        <div>
            <form onSubmit={submitSmurf} >
                <input type="text" value={newSmurf.name} name='name' placeholder='Smurf Name' onChange={handleChanges} />
                <input type="text" value={newSmurf.age} name='age' placeholder='Smurf Age'onChange={handleChanges} />
                <input type="text" value={newSmurf.height} name='height' placeholder='Smurf Height' onChange={handleChanges} />
            </form>
            <button>Add Smurf</button>
        </div>
    )
}

export default SmurfForm
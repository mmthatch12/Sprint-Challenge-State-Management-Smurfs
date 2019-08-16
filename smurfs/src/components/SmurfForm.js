import React from "react";

const SmurfForm = props => {
    return (
        <div>
            <form>
                <input type="text" placeholder='Smurf Name'/>
                <input type="text" placeholder='Smurf Age'/>
                <input type="text" placeholder='Smurf Height'/>
            </form>
            <button>Add Smurf</button>
        </div>
    )
}

export default SmurfForm
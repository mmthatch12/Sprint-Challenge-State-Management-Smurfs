import React from "react";

const Smurf = props => {
    return (
        <div>
            <h2>{props.name}</h2>
            <h2>{props.age}</h2>
            <h2>{props.height}</h2>
        </div>
    )
}

export default Smurf
import React from "react";

const Smurf = props => {
    return (
        <div>
            <h2>{props.smurfData.name}</h2>
            <h2>{props.smurfData.age}</h2>
            <h2>{props.smurfData.height}</h2>
        </div>
    )
}

export default Smurf
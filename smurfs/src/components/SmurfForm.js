import React from "react";
import { connect } from "react-redux";

import { postSmurf } from './actions/actions'

const SmurfForm = props => {
    
    return (
        <div>
            <form>
                <input type="text" placeholder='Smurf Name'  />
                <input type="number" placeholder='Smurf Age' />
                <input type="text" placeholder='Smurf Height'  />
            </form>
            <button onClick={props.postSmurf}>Add Smurf</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs
    }
}

export default connect(mapStateToProps, { postSmurf })(SmurfForm)
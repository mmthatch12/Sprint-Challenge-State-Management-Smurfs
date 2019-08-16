import React from "react";
import { connect } from "react-redux";

import Smurf from './Smurf'
import { getSmurfs } from './actions/actions'

const SmurfList = props => {
    return (
        <div>
            <button onClick={props.getSmurfs}>Get Smurfs</button>
            {props.smurfs &&
            props.smurfs.map(smurf => <Smurf key={smurf.id} smurfData={smurf} />)} 
        </div>
    )
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs

    }
}

export default connect(
    mapStateToProps, { getSmurfs }
)(SmurfList)
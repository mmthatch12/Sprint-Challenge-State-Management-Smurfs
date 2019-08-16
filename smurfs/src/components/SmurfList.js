import React from "react";
import { connect } from "react-redux";

import Smurf from './Smurf'

const SmurfList = props => {
    return (
        <div>
            <button>Get Smurfs</button>
            {props.smurfs &&
            props.cards.map(smurf => <Smurf key={smurf.id} smurfData={smurf} />)} 
        </div>
    )
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,

    }
}

export default connect(
    mapStateToProps, {}
)(SmurfList)
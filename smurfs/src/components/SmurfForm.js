import React, { useState } from "react";
import { connect } from "react-redux";
import { Form, Field, withFormik } from 'formik'
import axios from 'axios'

import { postSmurf } from './actions/actions'


const SmurfForm = props => {
    const[newSmurf, setNewSmurf] = useState({ name: '', age: '', height: '' })
    
    const handleChange = event => {
        setNewSmurf({
            ...newSmurf, [event.target.name]: event.target.value
        })
    }

    const addSmurf = event => {
        event.preventDefault()
        console.log("newsmurf", newSmurf)
        props.postSmurf(newSmurf)
        setNewSmurf({})
    }
    

    return (
        <div>
            {/* <Form>
                <Field type='text' name='name' placeholder='Smurf Name' />
                <Field type='number' name='age' placeholder='Smurf Age' />
                <Field type='text' name='height' placeholder='Smurf Height' />
                <button type='submit'>Add Smurf!</button>
            </Form> */}
            <form onSubmit={addSmurf}>
                <input type="text" name='name' onChange={event => handleChange(event)} placeholder='Smurf Name'  />
                <input type="text" name='age' onChange={event => handleChange(event)} placeholder='Smurf Age' />
                <input type="text" name='height' onChange={event => handleChange(event)} placeholder='Smurf Height'  />
            
                <button >Add Smurf</button>
            </form>
            
        </div>
    )
}

// const FormicSmurfForm = withFormik({
//     mapPropsToValues({ name, age, height }) {
//         return {
//             name: name || '',
//             age: age || 0,
//             height: height || ''
//         }
//     },

//     handleSubmit(values, { resetForm, setStatus }) {
//         axios.post('http://localhost:3333/smurfs', values)
//             .then(res => {
//                 console.log('post request', res.data)
//                 setStatus(res.data)
//                 resetForm()
//             })
//             .catch(err => {
//                 console.log(err.response)
//             })
//     },

// })(SmurfForm)

const mapStateToProps = state => {
    return {
        error: state.error
    }
}

export default connect(mapStateToProps, { postSmurf })(SmurfForm)


import React from "react";
import { connect } from "react-redux";
import { Form, Field, withFormik } from 'formik'
import axios from 'axios'



const SmurfForm = () => {
    // const[newSmurf, setNewSmurf] = useState({ name: '', age: 0, height: '' })
    
    // const handleChange = event => {
    //     event.preventDefault();
    //     setNewSmurf({
    //         ...newSmurf, [event.target.name]: event.target.value
    //     })
    // }

    // const addSmurf = event => {
    //     event.preventDefault()
    //     console.log("newsmurf", newSmurf)
    //     props.postSmurf(newSmurf)
    //     setNewSmurf({ name: '', age: 0, height: ''})
    // }
    

    return (
        <div>
            <Form>
                <Field type='text' name='name' placeholder='Smurf Name' />
                <Field type='number' name='age' placeholder='Smurf Age' />
                <Field type='text' name='height' placeholder='Smurf Height' />
                <button type='submit'>Add Smurf!</button>
            </Form>
            {/* <form onSubmit={addSmurf}>
                <input type="text" value={newSmurf.name} name='name' onChange={handleChange} placeholder='Smurf Name'  />
                <input type="number" value={newSmurf.age} name='age' onChange={handleChange} placeholder='Smurf Age' />
                <input type="text" value={newSmurf.height} name='height' onChange={handleChange} placeholder='Smurf Height'  />
            </form>
            <button onClick={props.postSmurf}>Add Smurf</button> */}
        </div>
    )
}

const FormicSmurfForm = withFormik({
    mapPropsToValues({ name, age, height }) {
        return {

        }
    }
})

export default SmurfForm


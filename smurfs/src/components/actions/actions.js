import axios from 'axios'

export const GET_SMURF_DATA_SUCCESS = 'GET_SMURF_DATA_SUCCESS'
export const GET_SMURF_DATA_FAILURE = 'GET_SMURF_DATA_FAILURE'


export const getSmurfs = () => {
    return dispatch => {
        axios
            .get('http://localhost:3333/smurfs')
            .then(res => {
                console.log('res from getsmurfs', res.data)
                dispatch({ type: GET_SMURF_DATA_SUCCESS, payload: res.data })
            })
            .catch(err => dispatch({ type: GET_SMURF_DATA_FAILURE, payload: err.response }))
    }
}
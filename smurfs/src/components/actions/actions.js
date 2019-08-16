import axios from 'axios'

export const GET_SMURF_DATA_SUCCESS = 'GET_SMURF_DATA_SUCCESS'
export const GET_SMURF_DATA_FAILURE = 'GET_SMURF_DATA_FAILURE'
export const POST_SMURF_SUCCESS = 'POST_SMURF_SUCCESS'
export const POST_SMURF_FAILURE = 'POST_SMURF_FAILURE'


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

export const postSmurf = values => {
    return dispatch => {
        axios
            .post('http://localhost:3333/smurfs', values)
            .then(res => {
                console.log('post request', res.data)
                dispatch({ type: POST_SMURF_SUCCESS, payload: res.data})
            })
            .catch(err => {
                
                console.log('error', err.response)
                dispatch({ type: POST_SMURF_FAILURE, payload: err.response })
            })

    }
}
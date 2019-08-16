import axios from 'axios'

export const getSmurfs = () => {
    return dispatch => {
        axios
            .get('http://localhost:3333/smurfs')
            .then(res => console.log('res from getsmurfs', res.data))
            .catch(err => console.log('error'))
    }
}
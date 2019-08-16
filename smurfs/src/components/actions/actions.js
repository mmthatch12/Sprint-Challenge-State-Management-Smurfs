import axios from 'axios'

export const getSmurfs = () => {
    return dispatch => {
        axios
            .get('http://localhost:3333/smurfs')
            .then(res => console.log(res))
            .catch(err => console.log('error'))
    }
}
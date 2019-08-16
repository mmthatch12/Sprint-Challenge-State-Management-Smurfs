import {
    GET_SMURF_DATA_SUCCESS,
    GET_SMURF_DATA_FAILURE
} from '../components/actions/actions'

const initialState = {
    smurfs: [],
    error: '',
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_SMURF_DATA_SUCCESS:
            return {
                ...state,
                smurfs: action.payload,
                error: ''
            }
        case GET_SMURF_DATA_FAILURE:
            return {
                ...state,
                error: action.payload,
                smurfs: null
            }
        default:
            return state;
    }
}
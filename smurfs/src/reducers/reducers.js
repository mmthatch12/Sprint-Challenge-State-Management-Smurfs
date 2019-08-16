import {
    GET_SMURF_DATA_SUCCESS,
    GET_SMURF_DATA_FAILURE,
    POST_SMURF_FAILURE,
    POST_SMURF_SUCCESS
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
        case POST_SMURF_SUCCESS:
            return {
                ...state,
                smurfs: action.payload,
                error: ''
            }
        case POST_SMURF_FAILURE:
            return {
                ...state,
                error: action.payload
            }        
            default:
                return state;
    }
}
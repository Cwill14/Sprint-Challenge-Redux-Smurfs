/*
  Be sure to import in all of the action types from `../actions`
*/
import { 
  FETCH_REQUEST, 
  FETCH_SUCCESS, 
  FETCH_FAILURE,
  ADD_REQUEST,
  ADD_SUCCESS,
  ADD_FAILURE, 
  DELETE_REQUEST,
  DELETE_SUCCESS,
  DELETE_FAILURE
} from '../actions';
/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
*/
const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
}
/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REQUEST:
      return {
        ...state,
        error: null,
        fetchingSmurfs: true
      }
    case FETCH_SUCCESS:
      return {
        ...state,
        fetchingSmurfs: false,
        smurfs: action.payload
      }
    case FETCH_FAILURE:
      return {
        ...state,
        fetchingSmurfs: false,
        error: action.error
      }
    case ADD_REQUEST:
      return {
        ...state,
        error: null,
        addingSmurf: true
      }
    case ADD_SUCCESS:
      return {
        ...state,
        addingSmurf: false,
        smurfs: [...state.smurfs, action.payload]
      }
    case ADD_FAILURE:
      return {
        ...state,
        addingSmurf: false,
        error: action.error
      }
    case DELETE_REQUEST:
      return {
        ...state,
        deletingSmurf: true,
        error: null
      }
    case DELETE_SUCCESS:
      return {
        ...state,
        deletingSmurf: false,
        smurfs: action.payload
      }
    case DELETE_FAILURE:
      return {
        ...state,
        deletingSmurf: false,
        error: action.error
      }
    default:
      return state;
  }
}

export default rootReducer;
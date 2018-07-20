import {combineReducers} from 'redux-seamless-immutable';
import {RESET_ALL_COMPONENT_STATE, UPDATE_COMPONENT_STATE, CLEAR_COMPONENT_STATE} from './ComponentActionConstants';

export const componentReducer = (state = {}, action) => {
  if (action.type && (action.type.startsWith(UPDATE_COMPONENT_STATE('')))){
    const path = action.pa
    th || [];
    let stateToModify = state.getIn(path);
    stateToModify = stateToModify ? stateToModify.merge(action.data) : action.data;
    const result = state.setIn(path, stateToModify);
    if (action.continueWith){
      setTimeout(() => action.continueWith(state));
    }
    return result;
  } if (action.type && (action.type.startsWith(CLEAR_COMPONENT_STATE('')))){
    const path = action.path || [];
    const result = state.setIn(path, {});
    if (action.continueWith){
      setTimeout(() => action.continueWith(state));
    }
    return result;
  } else if (action.type && (action.type === RESET_ALL_COMPONENT_STATE)){
    return {};
  }
 
  return state;
};

export default componentReducer;

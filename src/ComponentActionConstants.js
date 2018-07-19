
const getOr = (val, suffix = '') =>{
  return val ? val.toUpperCase() + suffix : '';
};

export const UPDATE_COMPONENT_STATE = (stateKey) => `UPDATE_COMPONENT_STATE_${getOr(stateKey)}`;
export const CLEAR_COMPONENT_STATE = (stateKey) => `CLEAR_COMPONENT_STATE_${getOr(stateKey)}`;
export const RESET_ALL_COMPONENT_STATE = 'RESET_ALL_COMPONENT_STATE';
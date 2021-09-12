import {
  CLICK_IMAGE
} from './actions'

export const initialState = {
  isOpen: false, 
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CLICK_IMAGE: {
      return {
        ...state,
        isOpen: !state.isOpen,
      }
    }
    default:
      return state;
  }
};

export default reducer;

import experiencesData from '../data/experiences'

import {
  CLICK_IMAGE,
  CLICK_CV,
} from './actions'

export const initialState = {
  isOpen: false,
  cvOpen: false,
  experiences: experiencesData, 
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CLICK_IMAGE: {
      return {
        ...state,
        isOpen: !state.isOpen,
      };
    }
    case CLICK_CV: {
      return {
        ...state,
        cvOpen: !state.cvOpen,
      };
    }
    default:
      return state;
  }
};

export default reducer;

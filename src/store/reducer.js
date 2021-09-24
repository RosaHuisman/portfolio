import experiencesData from '../data/experiences'

import {
  CLICK_IMAGE,
  CLICK_CV,
  CLICK_OPEN_DESCRIPTION
} from './actions'

export const initialState = {
  isOpen: false,
  cvOpen: false,
  experiences: experiencesData,
  descriptionOpen: false,
  element: '', 
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
    case CLICK_OPEN_DESCRIPTION: {
      return {
        ...state,
        descriptionOpen: !state.descriptionOpen,
        element:action.element,
      }
    }
    default:
      return state;
  }
};

export default reducer;

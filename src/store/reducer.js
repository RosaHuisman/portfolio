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
      console.log(action.element)
      return {
        ...state,
        //experiences: state.experiences.find((exp) => exp.title === action.element),
        //descriptionOpen: !state.descriptionOpen,
        descriptionOpen: state.experiences.find((exp) => exp.title === action.element),
      }
    }
    default:
      return state;
  }
};

export default reducer;

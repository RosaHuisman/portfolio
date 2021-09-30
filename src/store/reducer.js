import experiencesData from '../data/experiences'


import {
  CLICK_IMAGE,
  CLICK_CV,
  CLICK_OPEN_DESCRIPTION,
  CHANGE_VALUE,
  INPUT_EMPTY,
  MESSAGE_SEND,
  CHANGE_TEXTAREA_VALUE,
  SET_LOADING

} from './actions'

export const initialState = {
  isOpen: false,
  cvOpen: false,
  experiences: experiencesData,
  descriptionOpen: false,
  element: '',
  username: '',
  message: '',
  reply_to: '',
  emptymessage: '',
  successmessage: '',
  loading: false,
  
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CLICK_IMAGE: {
      return {
        ...state,
        isOpen: !state.isOpen,
        cvOpen: false,
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
    case CHANGE_VALUE: {
      return {
        ...state,
        [action.key]: action.value
      }
    }
    case CHANGE_TEXTAREA_VALUE: {
      return {
        ...state,
        message: action.value
      }
    }
    case INPUT_EMPTY: {
      return {
        ...state,
        emptymessage: 'Merci de remplir tous les champs'
      }
    }
    case MESSAGE_SEND: {
      return {
        ...state,
        loading: false,
        username: '',
        message: '',
        reply_to: '',
        emptymessage: '',
        successmessage: 'Votre message a bien été envoyé, je vous remercie'
      }
    }
    case SET_LOADING: {
      return {
        ...state,
        loading: true 
      }
    }
    default:
      return state;
  }
};

export default reducer;

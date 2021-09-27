import { connect } from 'react-redux';
import Contact from '../components/Contact';

import { inputIsEmpty, messageSend, changeTextareaValue, setIsLoading } from '../store/actions'

const mapStateToProps = (state) => ({
    username: state.username,
    message: state.message,
    reply_to: state.reply_to,
    emptymessage: state.emptymessage,
    successmessage: state.successmessage,
    loading: state.loading,
    
});

const mapDispatchToProps = (dispatch) => ({
    inputEmpty: () => {
        dispatch(inputIsEmpty())
    },

    contactSuccess: () => {
        dispatch(messageSend())
    },
    
    changeTextareaValue: (value) => {
        dispatch(changeTextareaValue(value))
    },

    isLoading: () => {
        dispatch(setIsLoading())
    }
    
});

export default connect(mapStateToProps, mapDispatchToProps)(Contact);

import { connect } from 'react-redux';
import Contact from '../components/Contact';

import { inputIsEmpty, messageSend, changeTextareaValue } from '../store/actions'

const mapStateToProps = (state) => ({
    username: state.username,
    message: state.message,
    reply_to: state.reply_to,
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

    
});

export default connect(mapStateToProps, mapDispatchToProps)(Contact);

import { connect } from 'react-redux';
import Contact from '../components/Contact';

import { inputIsEmpty, messageSend } from '../store/actions'

const mapStateToProps = (state) => ({
    username: state.username,
    message: state.message,
    reply_to: state.reply_to,
    emptymessage: state.emptymessage,
    successmessage: state.successmessage,
    
});

const mapDispatchToProps = (dispatch) => ({
    inputEmpty: () => {
        dispatch(inputIsEmpty())
    },

    contactSuccess: () => {
        dispatch(messageSend())
    }
    
});

export default connect(mapStateToProps, mapDispatchToProps)(Contact);

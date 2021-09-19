import { connect } from 'react-redux';
import Intro from '../components/Intro';

import {clickOnImage, clickOnButtonCV} from '../store/actions'

const mapStateToProps = (state) => ({
    isOpen: state.isOpen,
    cvOpen: state.cvOpen,
});

const mapDispatchToProps = (dispatch) => ({
    clickImage: () => {
        dispatch(clickOnImage()) 
    },

    clickCV: () => {
        dispatch(clickOnButtonCV()) 
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Intro);

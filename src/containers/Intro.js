import { connect } from 'react-redux';
import Intro from '../components/Intro';

import {clickOnImage} from '../store/actions'

const mapStateToProps = (state) => ({
    isOpen: state.isOpen,
});

const mapDispatchToProps = (dispatch) => ({
    clickImage: () => {
        dispatch(clickOnImage()) 
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Intro);

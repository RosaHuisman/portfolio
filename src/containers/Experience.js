import { connect } from 'react-redux';
import Experience from '../components/Experience';

import {clickOpenDescription} from '../store/actions'

const mapStateToProps = (state) => ({
    experiences: state.experiences,
    descriptionOpen: state.descriptionOpen, 
});

const mapDispatchToProps = (dispatch) => ({
    openDescription: (element) => {
        dispatch(clickOpenDescription(element));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Experience);

import { connect } from 'react-redux';
import Field from '../components/Contact/Field';

import {changeInputValue} from '../store/actions'

const mapStateToProps = (state) => ({
    
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    changeValue: (value) => {
        dispatch(changeInputValue(ownProps.name, value))
    }
    
});

export default connect(mapStateToProps, mapDispatchToProps)(Field);

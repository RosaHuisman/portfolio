import { connect } from 'react-redux';
import Experience from '../components/Experience';

//import {} from '../store/actions'

const mapStateToProps = (state) => ({
    experiences: state.experiences,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Experience);

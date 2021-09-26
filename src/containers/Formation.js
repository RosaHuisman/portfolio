import { connect } from 'react-redux';
import Formation from '../components/Formation';


const mapStateToProps = (state) => ({
    formations: state.formations,
    
});

const mapDispatchToProps = (dispatch) => ({
   
});

export default connect(mapStateToProps, mapDispatchToProps)(Formation);

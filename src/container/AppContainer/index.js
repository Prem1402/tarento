import { connect } from 'react-redux';
import App from '../../component/AppComponent';

const mapStateToProps = state => ({
  felxiConfig: state.FelxiReducer
})

export default connect(mapStateToProps)(App);

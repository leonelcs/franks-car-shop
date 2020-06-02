import AppComponent from './AppComponent';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import fetchCars from './redux/fetchCars';
import { getCars } from './redux/carsReducer';

const mapStateToProps = (state) => ({
    cars: getCars(state),
})

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({fetchCars: fetchCars}, dispatch);
}

const App = connect(mapStateToProps, mapDispatchToProps)(AppComponent);

export default App;
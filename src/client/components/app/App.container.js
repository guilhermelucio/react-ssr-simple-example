import { connect } from 'react-redux';
import { fetchCurrentUser } from '../../actions';
import { App } from './App.component';

export const loadData = store => {
    return store.dispatch(fetchCurrentUser());
};

const mapStateToProps = ({ auth }) => {
    return { auth };
}

export default {
    component: connect(mapStateToProps, null)(App),
    loadData
}
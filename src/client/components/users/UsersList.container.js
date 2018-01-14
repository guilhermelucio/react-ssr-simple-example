import { connect } from 'react-redux';
import { UsersList } from './UsersList.component';
import { fetchUsers } from '../../actions';

const mapStateToProps = state => {
    return { users: state.users };
};

// Used by Server Side Rendering to tell which data needs to be loaded
// for the UsersList component
export const loadData = store => {
    return store.dispatch(fetchUsers());
};

export default {
    loadData,
    component: connect(mapStateToProps, { fetchUsers })(UsersList)
};

import { connect } from 'react-redux';
import { UsersList } from './UsersList.component';
import { fetchUsers } from '../../actions';

const mapStateToProps = state => {
    return { users: state.users };
};

// Used by Server Side Rendering to tell which data needs to be loaded
// for the UsersList component
export const loadData = () => {
    console.log('Fetch the users list');
};

export default connect(mapStateToProps, { fetchUsers })(UsersList);

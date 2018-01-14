import React, { Component } from 'react';

export class UsersList extends Component {
    componentDidMount() {
        this.props.fetchUsers();
    }

    renderUsers() {
        return this.props.users.map(user => {
            return <li key={user.id}>{user.name}</li>
        });
    }

    render() {
        return (
            <div>
                Here's a big list of users
                <ul>
                    { this.renderUsers() }
                </ul>
            </div>
        );
    }
}

export default UsersList;

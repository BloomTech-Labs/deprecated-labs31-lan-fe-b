import React from 'react';
import { connect } from 'react-redux';
import { updateUserDisplayName } from '../../actions';
import Header from '../common/header';

const editRoles = props => {
    return (
        <>
            <Header history={props.history}/>
            <h1>Manage User Roles Page</h1>
        </>
    )
}

const mapStateToProps = state => {
    return {
        user: state.user
    };
};

export default connect(mapStateToProps, { updateUserDisplayName })(editRoles);
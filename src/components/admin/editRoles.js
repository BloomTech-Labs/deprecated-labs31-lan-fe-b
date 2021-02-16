import React from 'react';
import { connect } from 'react-redux';
import Header from '../common/header';
import CreateRole from './createRole';

const editRoles = props => {
    return (
        <>
            <Header history={props.history}/>
            <h1>Manage User Roles Page</h1>
            <CreateRole />
        </>
    )
}

const mapStateToProps = state => {
    return {
        state
    };
};

export default connect(mapStateToProps, {})(editRoles);
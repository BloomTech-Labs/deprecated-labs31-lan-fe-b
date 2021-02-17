import React from 'react';
import { connect } from 'react-redux';
import Header from '../common/header';
import CreateRole from './createRole';
import EditRolesContainer from './styles/editRolesStyle'
 
const editRoles = props => {
    return (
        <>
            <EditRolesContainer>
            <Header history={props.history}/>
                <h2>Manage User Roles Page</h2>
                <CreateRole />
            </EditRolesContainer>
        </>
    )
}

const mapStateToProps = state => {
    return {
        state
    };
};

export default connect(mapStateToProps, {})(editRoles);
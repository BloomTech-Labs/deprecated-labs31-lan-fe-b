 
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Header from '../common/header';
import { fetchUsers, fetchRoles } from '../../actions';
import EditUserContainer from './styles/editRolesStyle';

const EditUsers = (props) => {
  console.log("props---->: ", props)
  const [successCount, setSuccessCount]= useState(0)
  useEffect(() => {
    props.fetchUsers();
  },[]);
  useEffect(() => {
    props.fetchRoles();
  },[]);

  return (
    <>
      <Header history={props.history} />
      <EditUserContainer>
        {props.users.map(user => {
            return(
              <h1>{user.email}</h1>
            )
        })}

        {props.roles.map(role => {
            return(
              <h1>{role.role_name}</h1>
            )
        })}
      </EditUserContainer>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    users: state.users,
    roles:state.roles
  };
};

export default connect(mapStateToProps, { fetchUsers,fetchRoles })(EditUsers);

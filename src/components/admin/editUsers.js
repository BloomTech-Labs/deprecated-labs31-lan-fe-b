 
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
        {props.users.map(user => {//get all users
            return(
              <>
              <h1>{user.email}</h1>
              <form>
              <select>
              {
                props.roles.map(role => {//get all roles
                // <h1>{role.role_name}</h1>
                return(
                <option>{role.role_name}</option>
                )
              })
              }
              </select>
              </form>
              </>
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

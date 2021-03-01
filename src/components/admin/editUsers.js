 
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Header from '../common/header';
import { fetchUsers, fetchRoles } from '../../actions/index.js';
import EditUserContainer from './styles/editRolesStyle';
import GetMyUsers from './getCreateUserRoom';


const EditUsers = (props) => {
  const [successCount, setSuccessCount]= useState('')
  useEffect(() => {
    props.fetchUsers();
  },[]);
  useEffect(()=>{
    props.fetchRoles();
  },[]);

  

  return (
    <>
    {console.log(props.users)}
    {console.log(props.roles)}
      <Header history={props.history} />
      <EditUserContainer>
        {props.users.map(user => {
         return <div>
            <h1>{user.display_name}</h1>
            <img src={`${user.profile_picture}`} />
            <GetMyUsers/>
          </div>
        })}
      </EditUserContainer>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    users: state.users,
    roles: state.roles
  };
};

export default connect(mapStateToProps, { fetchUsers,fetchRoles })(EditUsers);

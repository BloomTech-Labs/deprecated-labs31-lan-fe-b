 
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Header from '../common/header';
import { fetchUsers, fetchRoles } from '../../actions';
import EditUserContainer from './styles/editRolesStyle';
import axios from "axios";

const EditUsers = (props) => {
  console.log("props---->: ", props)
  const [successCount, setSuccessCount]= useState(0)
  useEffect(() => {
    props.fetchUsers();
  },[]);
  useEffect(() => {
    props.fetchRoles();
  },[]);

  const onClick = (event) => {
    event.preventDefault();
    console.log("event.target: ", event.target)
    console.log("props.roles[event.target.value2]: ", props.roles[event.target.value2])
    axios
      .put(`http://localhost:5000/api/user/${event.target.dataset.user_id}`, {role_id:event.target.value})
      .then(res => {
        console.log("res: ", res)
      })
      .catch(err => console.log("err.response: ", err.response))
  }

  return (
    <>
      <Header history={props.history} />
      <EditUserContainer>
        {props.users.map(user => {//get all users
            return(
              <>
              <h1>{user.email}</h1>
              <p>{user.id}</p>
              <form onClick={onClick}>
              <select data-user_id={user.id}>
              {
                props.roles.map(role => {//get all roles
                <h1>{role.role_name}</h1>
                return(
                  <>
                  <option value={role.id}>{role.role_name}</option>
                  </>
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

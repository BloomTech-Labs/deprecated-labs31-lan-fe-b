 
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Header from '../common/header';
import { fetchUsers } from '../../actions';
import EditUserContainer from './styles/editRolesStyle';

const EditUsers = (props) => {
  const [successCount, setSuccessCount]= useState(0)
  useEffect(() => {
    props.fetchUsers();
  },[]);

  return (
    <>
      <Header history={props.history} />
      <EditUserContainer>
        {props.users.map(user => {
            return <h1>{user.email}</h1>
        })}
      </EditUserContainer>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};

export default connect(mapStateToProps, { fetchUsers })(EditUsers);

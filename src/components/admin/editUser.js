import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Header from '../common/header';
import EditUserContainer from './styles/editUserStyle';

const roles = [
    {
      "role_name": "admin",
      "id": 1,
      "UU": true,
      "UC": true,
      "UD": true,
      "PCU": true,
      "PCD": true,
      "RC": true,
      "RU": true,
      "RD": true
    },
    {
      "role_name": "moderator",
      "id": 2,
      "UU": false,
      "UC": false,
      "UD": false,
      "PCU": true,
      "PCD": true,
      "RC": false,
      "RU": false,
      "RD": false
    },
    {
      "role_name": "alumni",
      "id": 3,
      "UU": false,
      "UC": false,
      "UD": false,
      "PCU": false,
      "PCD": false,
      "RC": false,
      "RU": false,
      "RD": false
    }
  ];

const EditUser = (props) => {

  return (
    <>
      <EditUserContainer>
        <Header history={props.history} />
        <h2>Edit User Page</h2>
      </EditUserContainer>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    roles: state.roles,
  };
};

export default connect(mapStateToProps)(EditUser);

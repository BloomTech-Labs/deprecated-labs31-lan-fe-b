import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Header from '../common/header';
import EditUserContainer from './styles/editUserStyle';


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

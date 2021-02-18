import React from 'react';
import { connect } from 'react-redux';
import Header from '../common/header';
//implement getting users by id
const editRoles = (props) => {
  return (
    <>
      <Header history={props.history} />
      <h1>Manage User Roles Page</h1>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    state,
  };
};

export default connect(mapStateToProps, {})(editRoles);

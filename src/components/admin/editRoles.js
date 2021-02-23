import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Header from '../common/header';
//implement getting users by id
const editRoles = (props) => {
  return (
    <>
      <Header history={props.history} />
      <EditRolesContainer>
        <h2>Manage User Roles</h2>
        <div className="buttons">
          <button
            className="create-role-button"
            onClick={() => setToggleCreate(!toggleCreate)}
          >
            Create Role +{' '}
          </button>
        </div>
        {toggleCreate ? <CreateRole setSuccessCount={setSuccessCount} successCount={successCount} /> : null}
        {props.roles.length > 0
          ? props.roles.map((item, index) => <Role key={index} role={item} setSuccessCount={setSuccessCount} successCount={successCount} />)
          : <p>No Roles Loaded</p>}
      </EditRolesContainer>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    roles: state.roles,
  };
};

export default connect(mapStateToProps, { fetchRoles })(EditRoles);

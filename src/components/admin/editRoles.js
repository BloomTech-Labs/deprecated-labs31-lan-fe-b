import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Header from '../common/header';
import CreateRole from './createRole';
import Role from './role.js';
import { fetchRoles } from '../../actions';
import EditRolesContainer from './styles/editRolesStyle';

const EditRoles = (props) => {
  const [toggleCreate, setToggleCreate] = useState(false);
  const [successCount, setSuccessCount]= useState(0)
  useEffect(() => {
    props.fetchRoles();
  }, [successCount]);

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

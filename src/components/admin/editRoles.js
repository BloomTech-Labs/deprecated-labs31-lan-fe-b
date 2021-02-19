import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Header from '../common/header';
import CreateRole from './createRole';
import Role from './role.js';
import { fetchRoles } from '../../actions';
import EditRolesContainer from './styles/editRolesStyle';

const roles_data = {
  roles: [
    {
      role_name: 'admin',
      id: 1,
      UU: true,
      UC: true,
      UD: true,
      PCU: true,
      PCD: true,
      RC: true,
      RU: true,
      RD: true,
    },
    {
      role_name: 'mod',
      id: 2,
      UU: true,
      UC: true,
      UD: true,
      PCU: false,
      PCD: false,
      RC: false,
      RU: false,
      RD: false,
    },
    {
      role_name: 'alumni',
      id: 3,
      UU: false,
      UC: false,
      UD: false,
      PCU: false,
      PCD: false,
      RC: false,
      RU: false,
      RD: false,
    },
    {
      role_name: 'grandmaster',
      id: 3,
      UU: false,
      UC: false,
      UD: false,
      PCU: false,
      PCD: false,
      RC: true,
      RU: true,
      RD: false,
    },
  ],
};

const EditRoles = (props) => {
  const [tempRoles, setTempRoles] = useState(roles_data.roles); // for dev
  const [toggleCreate, setToggleCreate] = useState(false);
  useEffect(() => {
    props.fetchRoles();
  }, []);

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
        {toggleCreate ? <CreateRole /> : null}
        {props.roles.length > 0
          ? props.roles.map((item, index) => <Role key={index} role={item} />)
          : null}
        {/* following for dev */}
        {tempRoles.length > 0
          ? tempRoles.map((item, index) => <Role key={index} role={item} />)
          : null}
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

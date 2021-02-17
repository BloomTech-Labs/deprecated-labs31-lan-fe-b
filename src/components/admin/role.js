import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { putRole } from '../../actions';

const Role = (props) => {
  const [input, setInput] = useState({
    name: props.role.role_name,
    permissions: {
      UU: props.role.UU,
      UC: props.role.UC,
      UD: props.role.UD,
      PCU: props.role.PCU,
      PCD: props.role.PCD,
      RC: props.role.RC,
      RU: props.role.RU,
      RD: props.role.RD,
    },
  });
  const [error, setError] = useState({
    name: '',
    server: '',
  });
  const [editActive, setEditActive] = useState(false);
  const [success, setSuccess] = useState(false);

  const onChange = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  };

  const onCheck = (event) => {
    let permissions = input.permissions;
    setInput({
      ...input,
      permissions: {
        ...permissions,
        [event.target.name]: event.target.checked,
      },
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (input.name === '') {
      setError({
        name: 'Please enter a role name',
        server: '',
      });
    } else {
      setError({
        name: '',
        server: '',
      });
      props
        .putRole(input)
        .then((response) => {
          console.log(response);
          setSuccess(true);
        })
        .catch((error) => {
          console.log(error);
          setError({
            name: '',
            server: 'There was an error creating this role',
          });
        });
    }
  };

  const editOnClick = (event) => {
    // event.preventDefault();
    setEditActive(!editActive);
  };

  return (
    <>
      <div className="role">
        <h3>{props.role.role_name}</h3>
        <button
          className="edit-active-button"
          type="button"
          onClick={editOnClick}
        >
          Edit
        </button>
        {editActive ? (
          <form autoComplete="off" spellCheck="false" onSubmit={onSubmit}>
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter a role name"
              value={input.name}
              onChange={onChange}
            />
            {error.name && <p className="error">{error.name}</p>}
            <div className="checkboxes">
              <div className="check-col">
                <label>
                  <input
                    name="UU"
                    type="checkbox"
                    checked={input.permissions.UU}
                    onChange={onCheck}
                  />
                  User Update
                </label>
                <label>
                  <input
                    name="UC"
                    type="checkbox"
                    checked={input.permissions.UC}
                    onChange={onCheck}
                  />
                  User Create
                </label>
                <label>
                  <input
                    name="UD"
                    type="checkbox"
                    checked={input.permissions.UD}
                    onChange={onCheck}
                  />
                  User Delete
                </label>
                <label>
                  <input
                    name="PCU"
                    type="checkbox"
                    checked={input.permissions.PCU}
                    onChange={onCheck}
                  />
                  Post/Comment Update
                </label>
              </div>
              <div className="check-col">
                <label>
                  <input
                    name="PCD"
                    type="checkbox"
                    checked={input.permissions.PCD}
                    onChange={onCheck}
                  />
                  Post/Comment Delete
                </label>
                <label>
                  <input
                    name="RC"
                    type="checkbox"
                    checked={input.permissions.RC}
                    onChange={onCheck}
                  />
                  Room Create
                </label>
                <label>
                  <input
                    name="RU"
                    type="checkbox"
                    checked={input.permissions.RU}
                    onChange={onCheck}
                  />
                  Room Update
                </label>
                <label>
                  <input
                    name="RD"
                    type="checkbox"
                    checked={input.permissions.RD}
                    onChange={onCheck}
                  />
                  Room Delete
                </label>
              </div>
            </div>
            <div className="buttons">
              <button type="submit">
                Submit<i className="fas fa-check"></i>
              </button>
            </div>
            {error.server && <p className="error">{error.server}</p>}
          </form>
        ) : null}
        
      </div>
    </>
  );
};

export default connect(null, { putRole })(Role);

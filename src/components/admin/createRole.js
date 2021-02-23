import React, { useState } from 'react';
import { connect } from 'react-redux';
import { postRole } from '../../actions';

const initRole = {
  name: '',
  permissions: {
    UU: false,
    UC: false,
    UD: false,
    PCU: false,
    PCD: false,
    RC: false,
    RU: false,
    RD: false,
  },
};

const CreateRole = (props) => {
  const [input, setInput] = useState(initRole);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState({
    name: '',
    server: '',
  });

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

  const initializeInput = () => {
    setInput(initRole);
    setError({
      name: '',
      server: '',
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
        .postRole(input)
        .then((response) => {
          console.log(response);
          initializeInput();
          props.setSuccessCount(props.successCount + 1)
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

  return (
    <>
      <h3>Create A Role</h3>
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
            <div className="checkbox-container">
              <input
                name="UU"
                type="checkbox"
                checked={input.permissions.UU}
                onChange={onCheck}
                className="checkbox"
              />
              <label>User Update</label>
            </div>
            <div className="checkbox-container">
              <input
                name="UC"
                type="checkbox"
                checked={input.permissions.UC}
                onChange={onCheck}
              />
              <label>User Create</label>
            </div>
            <div className="checkbox-container">
              <input
                name="UD"
                type="checkbox"
                checked={input.permissions.UD}
                onChange={onCheck}
              />
              <label>User Delete</label>
            </div>
            <div className="checkbox-container">
              <input
                name="PCU"
                type="checkbox"
                checked={input.permissions.PCU}
                onChange={onCheck}
              />
              <label>Post/Comment Update</label>
            </div>
          </div>
          <div className="check-col">
            <div className="checkbox-container">
              <input
                name="PCD"
                type="checkbox"
                checked={input.permissions.PCD}
                onChange={onCheck}
              />
              <label>Post/Comment Delete</label>
            </div>
            <div className="checkbox-container">
              <input
                name="RC"
                type="checkbox"
                checked={input.permissions.RC}
                onChange={onCheck}
              />
              <label>Room Create</label>
            </div>
            <div className="checkbox-container">
              <input
                name="RU"
                type="checkbox"
                checked={input.permissions.RU}
                onChange={onCheck}
              />
              <label>Room Update</label>
            </div>
            <div className="checkbox-container">
              <input
                name="RD"
                type="checkbox"
                checked={input.permissions.RD}
                onChange={onCheck}
              />
              <label>Room Delete</label>
            </div>
          </div>
        </div>
        <div className="buttons">
          <button type="button" onClick={initializeInput} className="edit-role-submit">
            Reset
          </button>
          <button type="submit" className="edit-role-submit">
            Submit
          </button>
        </div>
        {error.server && <p className="error">{error.server}</p>}
      </form>
    </>
  );
};

export default connect(null, { postRole })(CreateRole);

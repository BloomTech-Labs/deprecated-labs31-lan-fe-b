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

  const initializeInput = (event) => {
    event.preventDefault();
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
      <h2>Create A Role</h2>
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
                className='checkbox'
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
          <button type="button" onClick={initializeInput}>
            <i className="fas fa-times"></i>Reset
          </button>
          <button type="submit">
            Submit<i className="fas fa-check"></i>
          </button>
        </div>
        {error.server && <p className="error">{error.server}</p>}
      </form>
    </>
  );
};

export default connect(null, { postRole })(CreateRole);

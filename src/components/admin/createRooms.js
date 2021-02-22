import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addRoom } from '../../actions/index';

const CreateRooms = (props) => {
  const [input, setInput] = useState({
    role: '',
    description: '',
  });
  const [error, setError] = useState({
    checkbox: '',
    role: '',
    description: '',
  });

  const onChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (input.role === '') {
      setError({
        checkbox: 'Please input a role',
        role: '',
        description: '',
      });
    } else if (input.description === '') {
      setError({
        checkbox: 'Please input a description',
        role: '',
        description: '',
      });
    } else {
      setError({
        checkbox: '',
        role: '',
        description: '',
      });
      props.addRoom(input.role, input.description);
    }
  };

  return (
    <>
      <h1>Create Room</h1>
      <form autoComplete="off">
        <label>
          Add Room
          <input
            type="text"
            name="role"
            onChange={onChange}
            value={input.name}
          />
          {error.name && <p className="error">{error.name}</p>}
        </label>
        <label>
          Description
          <input
            type="text"
            name="description"
            onChange={onChange}
            value={input.description}
          />
        </label>
        <button onClick={onSubmit}>Add</button>
      </form>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    state,
  };
};

export default connect(mapStateToProps, { addRoom })(CreateRooms);

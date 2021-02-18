import React, { useState } from 'react';
import { connect } from 'react-redux';

const CreateRooms = (props) => {
  const [inputValue, setInputValue] = useState('');

  const handleChanges = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <h1>Create Room</h1>
      <form autoComplete="off">
        <label>
          Add Role
          <input
            type="text"
            name="role"
            onChange={handleChanges}
            value={inputValue}
          />
        </label>
        <button>Add</button>
      </form>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    state,
  };
};

export default connect(mapStateToProps, {})(CreateRooms);

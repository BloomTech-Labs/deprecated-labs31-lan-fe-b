import React from 'react';
import { connect } from 'react-redux';
import Header from '../common/header';
import CreateRooms from './createRooms';

const editRooms = (props) => {
  return (
    <>
      <Header history={props.history} />
      <h1>Edit Rooms</h1>
      <CreateRooms />
      {props.state.rooms.map((item) => (
        <div>
          <li>{item.room}</li>
        </div>
      ))}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    state,
  };
};

export default connect(mapStateToProps, {})(editRooms);

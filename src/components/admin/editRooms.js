import React from 'react';
import { connect } from 'react-redux';
import Header from '../common/header';

const editRooms = (props) => {
  return (
    <>
      <Header history={props.history} />
      <h1>Edit Rooms</h1>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    state,
  };
};

export default connect(mapStateToProps, {})(editRooms);

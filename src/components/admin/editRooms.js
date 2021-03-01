import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchRooms } from '../../actions';
import Header from '../common/header';
import CreateRooms from './createRooms';
import { Rooms } from './Rooms';

// const roles_data = [
//   {
//     id: 1,
//     icon: `${img}`,
//     timestamp: '32 minutes ago',
//     room: 'Previous students with jobs',
//     description:
//       'Where students can talk about their experience at their new job and how the transition was from lambda to a job enviroment',
//   },
//   {
//     id: 2,
//     icon: `${img}`,
//     timestamp: '5 days ago',
//     room: 'Lambda Employees',
//     description:
//       'A place where students who are employees at lambda can connect and talk about daily job struggles or just hang out',
//   },
//   {
//     id: 3,
//     icon: `${img}`,
//     timestamp: '6 days ago',
//     room: 'On the job search',
//     description:
//       'Students can connect and recommend each other companies to apply to or refer students without jobs',
//   },
// ];

const EditRooms = (props) => {
  useEffect(() => {
    props.fetchRooms();
  }, [fetchRooms()]);

  return (
    <>
      <Header history={props.history} />
      <CreateRooms />
      {props.rooms.map((item) => (
        <Rooms item={item} />
      ))}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    rooms: state.rooms
  };
};

export default connect(mapStateToProps, { fetchRooms })(EditRooms);

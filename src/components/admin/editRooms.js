import React from 'react';
import { connect } from 'react-redux';
import Header from '../common/header';
import CreateRooms from './createRooms';

const roles_data = [
  {
    id: 1,
    role: 'Previous students with jobs',
    description:
      'Where students can talk about their experience at their new job and how the transition was from lambda to a job enviroment',
  },
  {
    id: 2,
    role: 'Lambda Employees',
    description:
      'A place where students who are employees at lambda can connect and talk about daily job struggles or just hang out',
  },
  {
    id: 3,
    role: 'On the job search',
    description:
      'Students can connect and recommend each other companies to apply to or refer students without jobs',
  },
];

const editRooms = (props) => {
  return (
    <>
      <Header history={props.history} />
      <h1>Edit Rooms</h1>
      <CreateRooms />
      {roles_data.map((item) => (
        <div key={item.id}>
          <h4>{item.room}</h4>
          <p>{item.description}</p>
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

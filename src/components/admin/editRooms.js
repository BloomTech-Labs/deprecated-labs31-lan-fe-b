import React from 'react';
import { connect } from 'react-redux';
import Header from '../common/header';
import CreateRooms from './createRooms';
import styled from 'styled-components';

const RoomsContainer = styled.div`
  .rooms-card {
    padding: 16px;
    margin: 16px auto;
    background-color: #2c2f33;
    border-radius: 3px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    display: flex;
    width: 52%;
  }
  .right {
    .display-name-and-timestamp {
      margin-bottom: 4px;
      display: flex;
      align-items: center;

      .display-name {
        margin-right: 8px;
        padding-bottom: 18px;
        font-size: 0.875rem;
        font-weight: 500;
        color: #ffffff;
        transition: 0.25s;

        :hover {
          opacity: 0.5;
        }
      }

      .timestamp {
        font-size: 0.625rem;
        font-weight: 500;
        color: #ffffff;
        padding-bottom: 16px;
      }
    }

    .labels {
      margin-bottom: 4px;
      display: flex;
    }

    .description {
      margin-bottom: 4px;
      padding-bottom: 10px;
      font-size: 1rem;
      font-weight: 600;
      color: #ffffff;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      width: 75%;
    }
    button {
      padding: 10px 24px;
      margin-top: 16px;
      margin-left: 5px;
      background: linear-gradient(to right, #0084ff, #0099ff);
      border: none;
      border-radius: 3px;
      font-family: 'Nunito', sans-serif;
      font-size: 0.875rem;
      font-weight: 600;
      color: #ffffff;
      cursor: pointer;
      transition: 0.25s;

      :hover {
        opacity: 0.5;
      }
    }
  }
`;

const roles_data = [
  {
    id: 1,
    timestamp: '32 minutes ago',
    room: 'Previous students with jobs',
    description:
      'Where students can talk about their experience at their new job and how the transition was from lambda to a job enviroment',
  },
  {
    id: 2,
    timestamp: '5 days ago',
    room: 'Lambda Employees',
    description:
      'A place where students who are employees at lambda can connect and talk about daily job struggles or just hang out',
  },
  {
    id: 3,
    timestamp: '6 days ago',
    room: 'On the job search',
    description:
      'Students can connect and recommend each other companies to apply to or refer students without jobs',
  },
];

const editRooms = (props) => {
  return (
    <>
      <Header history={props.history} />
      <CreateRooms />
      {roles_data.map((item) => (
        <RoomsContainer key={item.id}>
          <div className="rooms-card">
            <div className="right">
              <div className="display-name-and-timestamp">
                <p className="display-name">{item.room}</p>
                <p className="timestamp">{item.timestamp}</p>
              </div>
              <p className="description">{item.description}</p>
              <button>Edit</button>
              <button>Delete</button>
            </div>
          </div>
        </RoomsContainer>
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

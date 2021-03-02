import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchRooms, fetchPopularByRoom } from '../../actions/';
import RoomsContainer from './styles/roomsStyle';

const Rooms = (props) => {
  useEffect(() => {
    props.fetchRooms();
  }, []);

  return (
    <RoomsContainer>
      <h2>Rooms Component</h2>
      {props.rooms.length > 0 ? (
        props.rooms.map((item) => {
          return <p className="room-item">{item.name}</p>;
        })
      ) : (
        <p>No Rooms Loaded</p>
      )}
    </RoomsContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    rooms: state.rooms,
  };
};

export default connect(mapStateToProps, { fetchRooms, fetchPopularByRoom })(
  Rooms
);

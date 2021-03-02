import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchRooms, fetchPopularByRoom, setCurrentRoom } from '../../actions/';
import RoomsContainer from './styles/roomsStyle';

const Rooms = (props) => {
  const [query, setQuery] = useState("")
  const history = useHistory();

  useEffect(() => {
    props.fetchRooms();
  }, []);

  useEffect(() => {
    const params = new URLSearchParams()
    if (query) {
      params.append("room", query)
    } else {
      params.delete("room")
    }
    history.push({search: params.toString()})
  }, [query, history])

  const handleClick = (room) => {
    setQuery(room.id)
    props.setCurrentRoom(room)
  }

  return (
    <RoomsContainer>
      <h2>Rooms Component</h2>
      {props.rooms.length > 0 ? (
        props.rooms.map((item) => {
          return <p className="room-item" key={item.id} onClick={() => handleClick(item)}>{item.name}</p>;
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

export default connect(mapStateToProps, { fetchRooms, fetchPopularByRoom, setCurrentRoom })(
  Rooms
);

 
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Header from '../common/header';
import { fetchUsers, fetchRoles } from '../../actions/index.js';
import EditUserContainer from './styles/editRolesStyle';
import axios from 'axios';
import GetMyUsers from './getCreateUserRoom';


const EditUsers = (props) => {
  const [successCount, setSuccessCount]= useState('')
  const [values,setValues] = useState('')
  const [name,setName] = useState('')
  useEffect(() => {
    props.fetchUsers();
  },[]);
  useEffect(()=>{
    props.fetchRoles();
  },[successCount]);

  const onSubmit = (event) => {
    event.preventDefault();
    console.log("event.target.value,name: ",values,name)
    axios
      .put(`http://localhost:5000/api/user/${values}`,name)
      .then(res => {
        console.log("res: ", res.data)
      })
      .catch(err => console.log("err.response: ", err.response))
  }

  const handleChanges = (event) => {
    event.preventDefault();
    console.log("MY EVENTS",event.target,event.target.name)
    setValues(event.target.value)
    setName(event.target.name)
  }

  return (
    <>
    {console.log(props.users)}
    {console.log(props.roles)}
    {console.log(props)}
      <Header history={props.history} />
      <EditUserContainer>
        {props.users.map(user => {
          console.log("THIS IS",user.id)
         return (<div id={user.id}>
            <h1>{user.display_name}</h1>
            <img src={`${user.profile_picture}`} />
                    <form onSubmit={onSubmit}>
                      <label>
                        Choose A role:
                        <select name={user.id} onChange={handleChanges}>
                          {props.roles.map(roles=>{
                            return(
                            <option value={roles.id} name={user.id}>{roles.role_name}</option>
                            )
                          })}
                        </select>
                      </label> 

                       <button type="submit">
                    Submit
                    </button>   
                      </form> 
            
          </div>
          )
        })}
        
      </EditUserContainer>
    </>
  );
};


const mapStateToProps = (state) => {
  return {
    users: state.users,
    roles: state.roles
  };
};

export default connect(mapStateToProps, { fetchUsers,fetchRoles })(EditUsers);

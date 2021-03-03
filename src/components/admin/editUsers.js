 
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Header from '../common/header';
import { fetchUsers, fetchRoles,changeUserRole } from '../../actions/index.js';
import EditUserContainer from './styles/editRolesStyle';
import styled from 'styled-components';

const Div = styled.div`
  transition: 5s ease-in;
  *{
    display:flex;
    flex-direction:column;
  }
  select {
    width:100px;
    height:18px
  }
  button{
    width:75px;
    height:18px
  }
  label {
    display: flex;
    flex-direction: column;
    margin: 16px auto 4px;
    font-size: 1rem;
    font-weight: 500;
    color: #ffffff;
    width: 52%;
  }

  img {
    width: 100px;
    border-radius: 50%;
    
  }


  form {
    padding-bottom:75px;
    margin-bottom:20px;
    background-color: rgb(44,47,51);
  }

  input {
    padding: 10px;
    background-color: #2c2f33;
    border: none;
    border-radius: 3px;
    font-family: 'Nunito', sans-serif;
    font-size: 1rem;
    font-weight: 500;
    color: #ffffff;

    ::placeholder {
      color: dimgray;
    }
  }
  textarea {
    min-height: 44px;
    min-width: 100%;
    max-width: 100%;
    height: 288px;
    padding: 10px;
    background-color: #2c2f33;
    border: none;
    border-radius: 3px;
    font-family: 'Nunito', sans-serif;
    font-size: 1rem;
    font-weight: 500;
    color: #ffffff;
  }
  .submit-button {
    button {
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
    props.changeUserRole(values,name)
  }

  const handleChanges = (event) => {
    event.preventDefault();
    console.log("MY EVENTS",event.target,event.target.name)
    setValues(event.target.value)
    setName(event.target.name)
  }
  console.log("This",props)
  return (
    <>
      <Header history={props.history} />
      <Div>
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
      </Div>
    </>
  );
};


const mapStateToProps = (state) => {
  return {
    users: state.users,
    roles: state.roles
  };
};

export default connect(mapStateToProps, { fetchUsers,fetchRoles,changeUserRole })(EditUsers);

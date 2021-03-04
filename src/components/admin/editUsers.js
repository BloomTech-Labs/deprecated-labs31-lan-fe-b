 
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Header from '../common/header';
import { fetchUsers, fetchRoles,changeUserRole } from '../../actions/index.js';
import EditUserContainer from './styles/editUserStyle';
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

  toggle.off{
    color:red;
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
  const [currUser,setCurrUser] = useState('')
  const [textZ,settextZ] = useState("")
  useEffect(() => {
    props.fetchUsers();
  },[]);
  useEffect(()=>{
    props.fetchRoles();
  },[successCount]);

  const onSubmit = (event) => {
    event.preventDefault();
    // console.log("role id",values)
    // console.log("userid",name)
    settextZ(`Successfully changed User ${name} to ${props.roles[values-1].role_name}`)
    props.changeUserRole(values,name)
  }

  const handleChanges = (event) => {
    event.preventDefault();
    // console.log("role id",event.target.value)
    // console.log("userid",event.target.name)
    setValues(event.target.value)
    setName(event.target.name)
  }
 // console.log("This",props)
  return (
    <>
      <Header history={props.history} />
      <p toggle={false}> {textZ}</p>
      <Div>
      <EditUserContainer>
        {props.users.map(user => {
          //console.log("THIS IS",user.id)
         return (<div id={user.id}>
            <h1>{user.display_name}</h1>
            <img src={`${user.profile_picture}`} />
                    <form onSubmit={onSubmit}>
                      <label>
                        Choose A role:
                        <select name={user.id} onChange={handleChanges}>
                          <option></option>
                          {props.roles.roles.map(roles=>{
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

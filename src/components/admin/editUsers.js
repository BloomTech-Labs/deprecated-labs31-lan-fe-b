import React from "react";
import axios from 'axios';
import { connect } from 'react-redux';
import Header from '../common/header';
import GetMyUsers from "./getCreateUserRoom";

const BACKEND_URL =
  process.env.REACT_APP_DEPLOYED_URL || 'http://localhost:5000';
const editUsers = (props) => {
    axios.get(`${BACKEND_URL}/api/user/user`)
    .then((response)=> console.log(response))
    .catch((error)=> console.log(error));
 return(
     <>
      <Header history={props.history}/>
       <h1>Edit Users Here</h1>
       <GetMyUsers/>
       {/* {props.state.user.map((item) =>(
           <div>
               <li>{item.user}</li>
           </div>

       ))} */console.log("This is props",props.state.user)}
       <div>
           <li>{props.state.user.displayName}</li>
           <li>{props.state.user.id}</li>
       </div>
       
       
    

     </>

 )

}

const mapStateToProps = (state) => {
    return {
      state,
    };
  };
  
  export default connect(mapStateToProps, {})(editUsers);
  

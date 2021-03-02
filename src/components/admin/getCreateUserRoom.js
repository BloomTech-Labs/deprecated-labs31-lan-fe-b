import React, { useState } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';



//purpose is to display a corresponding users role
// this will take in a user id and then link itself to the role table
const GetMyUsers = (props) => {
    //console.log(props.props.users)
    //console.log(props.props.roles[0])
    const [curUser,setCurUser]= useState(props.curUser)
    const [roles,SetRoles] = useState(props.roles)
    console.log("THIS IS IT",curUser,roles)
// const testFunction = (event) => {
//     event.preventDefault();
//     console.log("event.target.value: ", event.target.value)
//     axios
//       .put(`http://localhost:5000/api/user/${event.target.value}`)
//       .then(res => {
//         console.log("res: ", res.data)
//       })
//       .catch(err => console.log("err.response: ", err.response))
//   }

  const onCheck = (event) => {
      console.log(event)
  }


    return(
        <form>
            <label>
                Choose A Role:
                <select>
                    <option value ={`${roles.id}`} value2 ={`${props.curUser}`} onChange={onCheck} > {roles.role_name}</option>
            </select>
            </label>
               <button type="submit" value="submit">
                    Submit
                    </button>
    
        </form>

    )
}

const mapStateToProps = (state) => {
    return{
     state,
    };
}

export default connect(mapStateToProps,{})(GetMyUsers)
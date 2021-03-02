import React, { useState } from 'react';
import {connect} from 'react-redux';



//purpose is to display a corresponding users role
// this will take in a user id and then link itself to the role table
const GetMyUsers = (props) => {
    console.log(props)
    console.log(props.props.roles.length)
    const [count,setCount]= useState(0)
    
    return(
        <form>
            <label>
                Choose A Role:
                <select>
            {props.props.roles.map(role=> {
                 {setCount(count+1)}
             return(
                
                    <option value ={`${role.id}`} value2 = {`${props.props.roles[count]}`}> {role.role_name}  </option>
                
                
             )
 
            })}
            </select>
            </label>
            <input type="submit" value="Submit"/>
        </form>

    )
}

const mapStateToProps = (state) => {
    return{
     state,
    };
}

export default connect(mapStateToProps,{})(GetMyUsers)
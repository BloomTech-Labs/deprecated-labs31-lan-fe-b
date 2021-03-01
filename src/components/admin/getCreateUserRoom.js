import React, { useState } from 'react';
import {connect} from 'react-redux';



//purpose is to display a corresponding users role
// this will take in a user id and then link itself to the role table
const GetMyUsers = () => {
   
    return(
        <form>
            <label>
                Choose A Role:
                <select>
                    <option value ="admin">Admin</option>
                    <option value ="Moderator">Moderator</option>
                    <option value ="User">User</option>
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
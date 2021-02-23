import React, { useState } from 'react';
import {connect} from 'react-redux';

const GetMyUsers = (props) => {
    const [user,setUsers] = useState(props) // I think this will be the user object
    console.log(props)
    return null;


}

const mapStateToProps = (state) => {
    return{
     state,
    };
}

export default connect(mapStateToProps,{})(GetMyUsers)
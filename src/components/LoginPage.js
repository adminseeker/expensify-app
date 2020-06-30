import React from "react";
import {connect} from "react-redux";
import {startLogin} from "../actions/auth";

const LoginPage = (props)=>(
    <div>
        <button onClick={()=>{
            props.dispatch(startLogin())
        }
        }>  Login
        </button>
    </div>
);

// const mapDispatchToProps = (dispatch)=>{
//     startLogin: ()=>dispatch(startLogin());
// }
 
export default connect()(LoginPage);
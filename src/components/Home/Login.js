import React, { Component } from 'react';
import { Link } from "react-router-dom";
import style from '../../components/Home/Login.module.css';

function Login(){
    return (
        <div className = { style.modal } >
             <Link to='/plan'>
             안녕하세용
            </Link>
        </div>
    )

}

export default Login;
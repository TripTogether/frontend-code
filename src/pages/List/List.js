import { Link } from "react-router-dom";
import React, { Component } from 'react';
import Header from '../../components/Home/Header';
import MiddleHeader from '../../components/List/MiddleHeader';
import style from './List.module.css';
import { TripData } from '../../components/Home/TripData';

function List() {
    return (
    <div className={style.layout}>
       <Header className={style.header}></Header>
       <MiddleHeader className={style.middleheader}></MiddleHeader>
    </div>
    );
}

export default List;
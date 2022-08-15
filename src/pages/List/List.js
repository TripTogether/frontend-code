import { Link } from "react-router-dom";
import React, { Component } from 'react';
import Header from '../../components/Home/Header';
import MiddleHeader from '../../components/List/MiddleHeader';
import style from './List.module.css';
import { TripData } from '../../components/Home/TripData';
import ListBoard from "../../components/List/ListBoard";

function List() {
    return (
    <div className={style.layout}>
       <Header></Header>
       <div className={style.line}></div>
       <MiddleHeader></MiddleHeader>
       <ListBoard></ListBoard>
    </div>
    );
}

export default List;
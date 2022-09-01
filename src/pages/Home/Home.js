import { Link } from "react-router-dom";
import React, { Component, useState } from 'react';
import Header from '../../components/Home/Header';
import style from './Home.module.css';
import { TripData } from '../../components/Home/TripData';

function Home() {
    return (
        <div className={style.layout}>
            <Header className={style.header}></Header>
            <div className={style.main}>
                <h1>
                    TRIPTOGETHER
                </h1>
                <h2>
                    새로운 사람과 <br /> 새로운 여행
                </h2>
                <h3>
                    간편한 여행 계획부터 여행 참여까지, <br />
                    새로운 사람과 새로운 추억을 만들어보세요.
                </h3>
            </div>
            <div className={style.menu}>
                <Link to='/plan'>
                    <button className={style.plan}>
                        <h1>
                            여행일정
                        </h1>
                        <h2>
                            여행의 세부 계획을 세워보세요!
                        </h2>
                    </button>
                </Link>
                <Link to='/myPage'>
                    <button className={style.myPage}>
                        <h1>
                            마이페이지
                        </h1>
                        <h2>
                            다녀온 여행의 후기를 기록해요
                        </h2>
                    </button>
                </Link>
            </div >
            <div className={style.list}>
                <p className={style.name}>여행 시작!</p>
                <Link to='/list'>
                    <button className={style.button}>
                        <div className={style.arrowright1}>
                            <h1>All</h1>
                            <img className={style.arrowright} src="img/arrowright.png" alt="arrowright" />
                        </div>
                    </button>
                </Link >
            </div>
            <TripData></TripData>

        </div >
    );
}

export default Home;

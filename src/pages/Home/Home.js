import { Link } from "react-router-dom";
import React, { Component } from 'react';
import Header from '../../components/Home/Header';
import style from './Home.module.css';

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
                <div className={style.plan}>
                    여행일정
                </div>
                <div className={style.plan}>
                    마이페이지
                </div>
            </div>
        </div>
    );
}

export default Home;

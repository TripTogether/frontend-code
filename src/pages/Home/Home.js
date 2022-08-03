import { Link } from "react-router-dom";
import React, { Component } from 'react';
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
                    <div className={style.plan}>
                        <h1>
                            여행일정
                        </h1>
                        <h2>
                            여행의 세부 계획을 세워보세요!
                        </h2>
                    </div>
                </Link>
                <Link to='/myPage'>
                    <div className={style.myPage}>
                        <h1>
                            마이페이지
                        </h1>

                        <h2>
                            다녀온 여행의 후기를 기록해요
                        </h2>
                    </div>
                </Link>
            </div >
            <Link to='/list'>
                    <div className={style.list}>
                        <h1>
                            리스트
                        </h1>
                    </div>
                </Link >
            <div>
                <TripData></TripData>
            </div>
        </div >
    );
}

export default Home;

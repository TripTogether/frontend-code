import React from 'react'
import style from './Route.module.css';
import { IoRefreshOutline } from 'react-icons/io5'

function Route() {
    return (
        <div className={style.container}>
            <div className={style.dateRoute}>
                <div className={style.date}>
                    <p>n일차</p>
                </div>
                <div className={style.start}>
                    <p>출발지</p>
                </div>
                <div className={style.route}>
                    <p>경로 </p>
                </div>
                <div className={style.destination}>
                    <p>도착지 </p>
                </div>
            </div>
            <div className={style.footer}>
                <h1>경로 확인</h1>
                <IoRefreshOutline className={style.refresh}></IoRefreshOutline>
                <button>경로 등록</button>
            </div>
        </div>
    )
}

export default Route;
import React from 'react'
import style from './Route.module.css';

function Route() {
    return (
        <div className={style.container}>
            <div className={style.box}>
                <p>n일차</p>
            </div>
            <div className={style.start}>
                <p>출발지</p>
            </div>
            <div className={style.destination}>
                <p>도착지 </p>
            </div>
        </div>
    )
}

export default Route;
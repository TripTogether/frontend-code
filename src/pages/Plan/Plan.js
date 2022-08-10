import React, { useState } from 'react'
import style from './Plan.module.css';
import Header from '../../components/Home/Header';
import Maps from '../../components/Plan/Maps';
import Calendar from '../../components/Plan/Calendar';
import { MdSearch } from 'react-icons/md';
import Route from '../../components/Plan/Route';
import { FaRoute } from 'react-icons/fa';

function Plan() {

    const [InputText, setInputText] = useState('')
    const [Place, setPlace] = useState('')

    const onChange = (e) => {
        setInputText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setPlace(InputText)
        setInputText('')
    }
    return (
        <div>
            <Header className={style.header}></Header>
            <div className={style.line}></div>
            <div className={style.plan}>
                <h1>
                    여행 일정 작성하기
                </h1>
                <button>등록</button>
            </div>
            <div className={style.layout}>

                <div className={style.title}>
                    <input placeholder='제목을 입력해 주세요.' />
                    <form className="inputForm" onSubmit={handleSubmit}>
                        <input placeholder='여행지를 검색해보세요.'
                            onChange={onChange} value={InputText} />
                        <MdSearch type="submit" onClick={handleSubmit}>검색 </MdSearch>
                    </form>
                </div>
                <Calendar></Calendar>
                <div className={style.route}>
                    <div className={style.map}>
                        지도 API
                        {/* <Maps searchPlace={Place} ></Maps> */}
                    </div>
                    <div className={style.ment}>
                        <h1>
                            <img className={style.routeIcon}
                                src="img/arrow_sign.png" />
                            최단 경로 추천</h1>
                    </div>
                    <Route></Route>
                </div>
                <div>
                </div>
            </div >

        </div>

    );
}

export default Plan;
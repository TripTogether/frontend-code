import React, { useState } from 'react'
import style from './Plan.module.css';
import Header from '../../components/Home/Header';
import Maps from '../../components/Plan/Maps';
import Calendar from '../../components/Plan/Calendar';
import { MdSearch } from 'react-icons/md';
import { FaRoute } from 'react-icons/fa';
import { IoRefreshOutline } from 'react-icons/io5';
import { RiDeleteBin5Fill } from 'react-icons/ri'


function Plan() {

    const [InputText, setInputText] = useState('')
    const [Place, setPlace] = useState('')
    var [route, setRoute] = useState([])

    const onChange = (e) => {
        setInputText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setPlace(InputText)
        setInputText('')
        let input_text = document.querySelector('#input-text');
        if (input_text.value !== '') {
            let new_arr = [...route];
            new_arr.push(input_text.value);
            setRoute(new_arr);
        }
    }

    const deleteRoute = (e) => {
        e.preventDefault()
        if (route.length !== 0) {
            let new_arr = [...route];
            new_arr.pop(route.value);
            setRoute(new_arr);
        }
    }

    console.log(route);

    const Date = () => {
        return (
            <div className={style.container}>
                <div className={style.date}>
                    <p>일차</p>
                    <RiDeleteBin5Fill onClick={deleteRoute}></RiDeleteBin5Fill>
                </div>
                <div className={style.dateRoute}>
                    <div >{route.map((item, i) => (
                        <div key={i} className={style.start}>
                            {item}
                        </div>
                    ))}</div>
                </div>
            </div >
        )
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
                            onChange={onChange} value={InputText} id="input-text" type='text' />
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
                    <Date></Date>
                    <form>
                        <div className={style.footer}>
                            <h1>경로 확인</h1>
                            <IoRefreshOutline className={style.refresh}></IoRefreshOutline>
                            <button type='submit'>경로 등록</button>
                        </div>
                    </form>
                </div>
                <div>
                </div>
            </div >

        </div>

    );
}

export default Plan;
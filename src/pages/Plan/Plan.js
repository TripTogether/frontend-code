import React, { useState } from 'react'
import style from './Plan.module.css';
import Header from '../../components/Home/Header';
import Maps from '../../components/Plan/Maps';
import Calendar from '../../components/Plan/Calendar';
import { MdSearch } from 'react-icons/md';
import { FaRoute } from 'react-icons/fa';
import { IoRefreshOutline } from 'react-icons/io5';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import { addMinutes } from 'date-fns';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import Date from '../../components/Plan/Date';


function Plan() {
    const [Place, setPlace] = useState('')
    const [components, setComponents] = useState([""]);

    const addComponent = () => {

        setComponents([...components, ""])

    }

    console.log(Place)
    const removeComponent = () => {
        setComponents(components.slice(0, components.length - 1));
    }
    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     setPlace(InputText)
    //     setInputText('')
    //     let input_text = document.querySelector('#input-text');
    //     if (input_text.value !== '') {
    //         let new_arr = [...route];
    //         new_arr.push(input_text.value);
    //         setRoute(new_arr);
    //     }
    // }

    // const deleteRoute = (e) => {
    //     e.preventDefault()
    //     if (route.length !== 0) {
    //         let new_arr = [...route];
    //         new_arr.pop(route.value);
    //         setRoute(new_arr);
    //     }
    // }


    const [InputText, setInputText] = useState('')

    const onChange2 = (e) => {
        setInputText(e.target.value)
    }
    const handleSubmit2 = (e) => {
        e.preventDefault()
        setPlace(InputText)

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
                    {/* <form className="inputForm" onSubmit={handleSubmit2}>
                        <input placeholder='여행지를 검색해보세요.'
                            onChange={onChange2} value={InputText} id="input-text" type='text' />
                        <MdSearch type="submit" onClick={handleSubmit2}>검색 </MdSearch>
                    </form> */}
                </div>
                <Calendar></Calendar>
                <div className={style.route}>
                    <div className={style.map}>
                        지도 API
                        <Maps searchPlace={Place} ></Maps>
                    </div>
                    <div className={style.ment}>
                        <h1>
                            <img className={style.routeIcon}
                                src="img/arrow_sign.png" />
                            최단 경로 추천</h1>
                        <AiOutlinePlus onClick={addComponent}></AiOutlinePlus>
                        <AiOutlineMinus onClick={removeComponent}></AiOutlineMinus>
                    </div>
                    <div >
                        {components.map((item, i) => (<Date Place={Place} text={item} date={i + 1} setPlace={setPlace} />))}
                    </div>
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

        </div >

    );
}

export default Plan;
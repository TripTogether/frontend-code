import React, { useState } from 'react';
import style from './Calendar.module.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/esm/locale";
import { BiCalendarAlt } from 'react-icons/bi'


export default function Calendar() {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [theme, setTheme] = useState(true); //전체공개 비공개 true or false
    const [num, setNum] = useState(1); // 여행에 참여하는 사람 순서


    let date = endDate.getTime() - startDate.getTime();

    let dday = (date / 1000 / 60 / 60 / 24) + 1;

    // date.setDate(endDate.getDate() - startDate.getDate())

    console.log(dday)
    const DateSelect = ({ value }) => (
        <button className="example-custom-input" >
            {value}
        </button>
    );

    const onRadioChange = () => {
        setTheme(!theme);
        console.log(theme);
    }

    const onNumChange = (e) => {
        setNum(e.target.value);
    }

    return (
        <div className={style.date}>
            <form>
                <h1>공개 설정</h1>
                <div className={style.radio}>
                    <input type="radio" name="theme" value="true" checked={theme} onChange={onRadioChange} /> 전체 공개
                    <input type="radio" name="theme" value="false" checked={theme} onChange={onRadioChange} /> 비공개
                </div>
                <h1>여행 날짜</h1>
                <h2>출발일</h2>
                <div className={style.selectDate}>
                    <BiCalendarAlt className={style.icon} />
                    <DatePicker locale={ko}
                        className={style.calendar}
                        dateFormat="yyyy-MM-dd"
                        selected={startDate}
                        minDate={new Date()}
                        onChange={date => setStartDate(date)}
                        selectsStart
                        startDate={startDate}
                        endDate={endDate}
                    // customInput={<DateSelect />} 
                    />
                </div>
                <h2>도착일</h2>
                <div className={style.selectDate2}>
                    <BiCalendarAlt className={style.icon} />
                    <DatePicker locale={ko}
                        className={style.calendar}
                        dateFormat="yyyy-MM-dd"
                        selected={endDate}
                        onChange={date => setEndDate(date)}
                        selectsEnd
                        startDate={startDate}
                        endDate={endDate}
                        minDate={startDate}
                    // customInput={<DateSelect />} 
                    />
                </div>
                <button type='submit' className={style.btn}>등록</button>
                <h1>모집 인원</h1>
                <input className={style.count} type="number" value={num} onChange={onNumChange} />
                <h3>명</h3>
            </form>
        </div>
    )
}


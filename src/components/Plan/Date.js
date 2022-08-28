import React, { useState } from 'react'
import style from '../../pages/Plan/Plan.module.css';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import { MdSearch } from 'react-icons/md';


function Date({ date, Place, setPlace }) {

    const [value, setValue] = useState('')



    const deleteRoute2 = (e) => {
        e.preventDefault()
        if (route.length !== 0) {
            let new_arr = [...route];
            new_arr.pop(route.value);
            setRoute(new_arr);
        }
    }

    let [route, setRoute] = useState([])

    const SearchRoute = ({ date }, props) => {

        const [InputText, setInputText] = useState('')

        const onChange = (e) => {
            setInputText(e.target.value)
        }
        const handleSubmit = (e) => {
            e.preventDefault()
            setPlace(InputText)
            setInputText('')
            let input_text = document.getElementById(`${date}`);
            if (input_text.value !== '') {
                let new_arr = [...route];
                new_arr.push(input_text.value);
                setRoute(new_arr);
            }
        }
        return (
            <form onSubmit={handleSubmit}>
                <input placeholder='여행지를 검색해보세요.'
                    value={props.value}
                    onChange={onChange}
                    id={date} type='text' name={date} />
                <MdSearch className={style.search} id={date} name={date} type="submit" value={value}
                    onClick={handleSubmit}>검색 </MdSearch>
            </form>
        )
    }

    console.log(route)
    return (
        <div className={style.container}>
            <div className={style.date}>
                <p>{date}일차</p>
                <SearchRoute className={style.inputForm} value={value} onValueChange={setValue} date={date}></SearchRoute>
                <RiDeleteBin5Fill className={style.delete} onClick={deleteRoute2}></RiDeleteBin5Fill>
            </div>
            <div className={style.dateRoute}>
                <div >{route.map((item, i) => (
                    <div key={i} className={style.start}>
                        <p>{item}</p>
                    </div>
                ))}
                </div>

            </div>
        </div >
    )
}

export default Date;
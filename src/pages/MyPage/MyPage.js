import style from './MyPage.module.css';
import Header from '../../components/Home/Header';
import { React, useState } from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
import ModalMain from '../../components/MyPage/ModalMain';
import ListBoard from '../../components/List/ListBoard';
import { TripData } from '../../components/Home/TripData';
import ListBoardtwo from '../../components/MyPage/ListBoardtwo';

function MyPage() {
    const [isOpen, setIsOpen] = useState(false);

    const openModalHandler = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={style.background}>
            <Header></Header>
            <div className={style.rectangle}>
                <div className={style.box}>
                    <img className={style.profile} src="img/profile.png" alt="profile" />
                </div>

                <div className={style.box}>
                    <p><strong> 이름 </strong></p>
                </div>

                <div className={style.box}>
                    <progress value="22" max="100"></progress>
                </div>
                <br></br>
                <div className={style.box2}>
                    <div className={style.flexitem}> <img className={style.airplane} src="img/airplane.png" alt="airplane" /> <p>함께한 여행 <strong>n건</strong></p> </div>
                    <div className={style.flexitem}> <img className={style.post} src="img/post.png" alt="post" /> <p>작성한 게시글 <strong>n건</strong></p></div>
                    <div className={style.flexitem}> <img className={style.heart} src="img/heart.png" alt="heart" /><p>받은 후기 <strong>n건</strong></p></div>
                </div>


            </div>


            <div className={style.rectangle}>
                <p><strong>여행 일정</strong></p>
                <TripData></TripData>
            </div>
            <div className={style.rectangle}>
                <p><strong>다녀온 여행지</strong></p>

                <ListBoardtwo></ListBoardtwo>
            </div>
        </div>
    )
}

export default MyPage;
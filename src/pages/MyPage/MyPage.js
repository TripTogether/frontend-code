import style from './MyPage.module.css';
import Header from '../../components/Home/Header';
import React from 'react';
import Modal from 'react-modal';


function MyPage() {
    return (
        <div className={style.background}>
            <Header></Header>
            <div className={style.rectangle}>
                <div className = {style.box}>
                    <img className={style.profile} src="img/profile.png" alt="profile" />
                </div>

                <div className = {style.box}>
                    <p>이름</p>
                </div>

                <div className = {style.box}>
                    <progress value="22" max="100"></progress>
                </div>

                <div className = {style.box2}>
                    <div className = {style.flexitem}> <img className={style.airplane} src="img/airplane.png" alt="airplane" /> <p>함께한 여행 <strong>n건</strong></p> </div>
                    <div className = {style.flexitem}> <img className={style.post} src="img/post.png" alt="post" /> <p>작성한 게시글 <strong>n건</strong></p></div>
                    <div className = {style.flexitem}> <img className={style.heart} src="img/heart.png" alt="heart" /><p>받은 후기 <strong>n건</strong></p></div>
                </div>
                
                
            </div>


            <div className={style.rectangle}>
                <p>여행 일정</p>
            </div>
            <div className={style.rectangle}>
                <p>후기 남기기</p>
                <button id="myBtn">다녀온 여행지</button>
                
            </div>
        </div>
    )
}

export default MyPage;
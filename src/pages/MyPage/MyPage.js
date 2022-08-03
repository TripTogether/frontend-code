import style from './MyPage.module.css';
import Header from '../../components/Home/Header';
import React from 'react';


function MyPage() {
    return (
        <div className={style.background}>
            <Header></Header>
            <div className={style.rectangle}>
                <img className={style.profile} src="img/profile.png" alt="profile" />
                <img ClassName={style.airplane} src="img/airplane.png" alt="airplane" />
                <img ClassName={style.post} src="img/post.png" alt="post" />
                <img ClassName={style.heart} src="img/heart.png" alt="heart" />
            </div>
            <div className={style.rectangle}>
                여행 일정
            </div>
            <div className={style.rectangle}>
                다녀온 여행지
            </div>
        </div>
    )
}




export default MyPage;
import style from './Plan.module.css';
import Header from '../../components/Home/Header';

function Plan() {
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
                    <input placeholder='여행지를 검색해보세요.' />
                </div>
                <div className={style.date}>
                    <h1>공개 설정</h1>
                    <div className={style.radio}>
                        <input type="radio" name="theme" value="Public" /> 전체 공개
                        <input type="radio" name="theme" value="Private" /> 비공개
                    </div>

                    <h1>여행 날짜</h1>
                    <h2>출발일</h2>
                    <h2>도착일</h2>
                    <h1>모집 인원</h1>
                    <input className={style.count} type="number" />
                    <h3>명</h3>
                </div>
                <div className={style.route}>
                    <div className={style.map}>
                        지도 API
                    </div>
                    <h1>dsfdsf</h1>
                </div>
            </div >

        </div>

    );
}

export default Plan
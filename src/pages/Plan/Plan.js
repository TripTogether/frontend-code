import style from './Plan.module.css';
import Header from '../../components/Home/Header';

function Plan() {
    return (
        // <div className={style.layout}>
        <div>
            <Header className={style.header}></Header>
            <div className={style.title}>
                <h1>
                    여행 일정 작성하기
                </h1>
                <button>등록</button>
            </div>
        </div >
    );
}

export default Plan
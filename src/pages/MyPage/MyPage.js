import style from './MyPage.module.css';
import Header from '../../components/Home/Header';
function MyPage() {
    return (
        <div className={style.background}>
            <Header></Header>
            <div className={style.rectangle1}>
                name
            </div>
        </div>
    )
}

export default MyPage;
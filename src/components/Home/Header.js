import style from '../../pages/Home/Home.module.css';
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className={style.header} >
            <div className={style.logo}>
                Trip Together
            </div>
            <nav className={style.nav}>
                <Link to='/'>
                    <button className={style.btn1}>
                        여행일정
                    </button>
                </Link>
                <Link to='/myPage'>
                    <button>
                        마이페이지
                    </button>
                </Link>
                <Link to='/'>
                    <button >
                        로그인
                    </button>
                </Link>
                <Link to='/\'>
                    <button className={style.btn}>
                        회원가입
                    </button>
                </Link>

            </nav>
        </div>
    )
}

export default Header;
import style from '../../pages/List/List.module.css';
import { Link } from "react-router-dom";
import SearchBar from './SearchBar';
function MiddleHeader() {
    return (
        <div className={style.middleheader}>
          <SearchBar></SearchBar>
          <Link to='/plan'>
          <button>글쓰기</button>
          </Link>
        </div>
    )
}

export default MiddleHeader;

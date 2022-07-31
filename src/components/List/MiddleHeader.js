import style from '../../pages/Plan/Plan.module.css';
import { GiAirplaneDeparture } from 'react-icons/gi'
function MiddleHeader({onClick,onChange}) {
    return (
    <div className={style.middleheader}>
            <div className="input-group">
        <input
          type="search"
          className="form-control rounded"
          placeholder="영화 이름 입력 "
          onChange={onChange}
        />
        <button type="button" id="search_btn" onClick={onClick}>
        </button>
            </div>
    </div>
    )
}

export default MiddleHeader;

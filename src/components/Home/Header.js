import style from '../../pages/Home/Home.module.css';
import { GiAirplaneDeparture } from 'react-icons/gi'

function Header() {
    return ( <
        div className = { style.header } >
        헤더!
        <
        GiAirplaneDeparture / >
        <
        /div>
    )
}

export default Header;
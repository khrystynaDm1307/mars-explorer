import { Link } from 'react-router-dom';
import './Button.scss'

function ButtonComponent(props) {
    const { pathname, text } = props

    return <Link to={pathname}>
        <button>{text}</button>
    </Link>

}

export default ButtonComponent;

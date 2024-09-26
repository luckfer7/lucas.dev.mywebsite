import { Link } from 'react-router-dom';
import './index.css';


function HeaderLinks ({url, children}) {
    return (
        <Link to={url} className='links'>
            {children}
        </Link>
    )
}



export default HeaderLinks;
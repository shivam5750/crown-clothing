import { Link } from 'react-router-dom';
import './directory-item.style.scss';

const DirectoryItem = ({category}) =>{
    const {title, imageUrl} = category;
    return(
        <Link className="directory-container" to={`shop/${title}`} >
            <div className="background-image" style={{
                backgroundImage: `url(${imageUrl})`
            }} />
            <div className="directory-body-container">
                <h2>{title}</h2>
                <p>Shop now</p>
            </div>
        </Link>
    )
}

export default DirectoryItem;
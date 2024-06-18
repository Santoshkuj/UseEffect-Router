import './showimage.css'
import {Link} from 'react-router-dom'
function ShowImages({image,id}) {
    return(
        <Link to={`/photo/${id}`}>
        <div className="image">
            <img src={image} alt={id}/>
        </div>
        </Link>
    )
}
export default ShowImages;
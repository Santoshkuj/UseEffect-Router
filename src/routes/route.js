import {Routes,Route} from 'react-router-dom'
import Image from '../component/image/Image';
import ImageDetails from '../component/imageDetails/ImageDetails';
function CostumeRoutes() {
    return(
        <Routes>
            <Route path='/' element={<Image/>}/>
            <Route path='/photo/:id' element={<ImageDetails/>}/>
        </Routes>
    )
}

export default CostumeRoutes;
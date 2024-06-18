import axios from 'axios'
import { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import './imageDetail.css'

function ImageDetails() {
    const [isloading,setIsloading] = useState(true)
    const [image,setImage] = useState({})
    let {id} = useParams()
    async function detail() {
        const URL = `https://api.slingacademy.com/v1/sample-data/photos/${id}`
        const response = await axios.get(URL)
        const imgDetail = response.data.photo;
        setImage(imgDetail)
        setIsloading(false)
    }

    useEffect(()=>{
        detail()
    },[])
    return(
        isloading ? 'DetailsLoading..' :
        <div className='image-wrapper'>
        <div className='img'>
            <img src={image.url}/>
        </div>
        <div className='details'>
            <h1>{image.title}</h1>
            <p>{image.description}</p>
        </div>
        </div>
    )
}
export default ImageDetails;
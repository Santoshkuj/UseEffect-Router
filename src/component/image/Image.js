import axios from 'axios';
import {useEffect, useState} from 'react'
import ShowImages from '../showImages/showImages';
import './image.css'

function Image() {
    const [images,setImages] = useState([])
    let [offset,SetOffset] = useState(0)
    const [isloading,seIsloading] = useState(true)
    const URL = `https://api.slingacademy.com/v1/sample-data/photos?offset=${offset}&limit=20`
    async function fetchImage() {
        seIsloading(true)
        try {
            const searchImages = await axios.get(URL);
            const response = searchImages.data.photos;
            const resImage = response.map((img)=>{
                return {url : img.url,
                        id : img.id
                        }
                
            })
            setImages(resImage)
            seIsloading(false)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        fetchImage()
    },[offset])
    return(
        <>
        <div className='images'>
            {isloading ? 'Loading...':images.map((el)=>{
                return(<ShowImages image={el.url} id={el.id} key={el.id}/>)
            })}
        </div>
        <div className='button'>
            <button disabled={offset === 0} onClick={()=>SetOffset(offset-20)}>Prev</button>
            <button disabled={offset === 120} onClick={()=>SetOffset(offset+20)}>Next</button>
        </div>
        </>
    )
}
export default Image;
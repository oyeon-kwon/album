import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './folder.css';
import ImageModal from './ImageModal';

function Folder() {

    const navigate = useNavigate();    
    const { id } = useParams();
    const [ albumData, setAlbumData ] = useState([]);
    const [ isOpenImageModalId , setIsOpenImageModalId ] = useState('');

    useEffect(() => {
        axios(`https://jsonplaceholder.typicode.com/photos/`)
        .then((response) => {
            let album = []
            for(let i=0; i<response.data.length; i++) {
                if(response.data[i].albumId === Number(id)) {
                    album.push(response.data[i])
                }
            }
            setAlbumData(album)
        })
    }, [])

    const openImageHandler = (e) => {
        // navigate(`/album=${id}/photo=${e.target.parentNode.id}`);
        setIsOpenImageModalId(e.target.parentNode.id)
    }

  return (
    <div className="folder-container">
        {
            albumData.map((album, i) => {
                return (
                    <div key={i} id={i} className='album-file' onClick={openImageHandler}>
                        <img src={album.thumbnailUrl} className='album-thumbnail' />
                        <div className='album-file-title'>{album.title}</div>
                    </div>
                )
            })
        }
        {
            isOpenImageModalId ? 
                <>
                    <ImageModal id={isOpenImageModalId}/>
                </>
            : 
            <>
            
            </>
        }
    </div>
  );
}

export default Folder;

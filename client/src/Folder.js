import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './folder.css';

function Folder() {
    
    const { id } = useParams();
    const [ albumData, setAlbumData ] = useState([]);

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

  return (
    <div className="folder-container">
        {
            albumData.map((album, i) => {
                return (
                    <div key={i} className='album-file'>
                        <img src={album.thumbnailUrl} className='album-thumbnail' />
                        <div className='album-file-title'>{album.title}</div>
                    </div>
                )
            })
        }
    </div>
  );
}

export default Folder;

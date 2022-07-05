import './album.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import folder from './image/folder.png';
import { useNavigate } from 'react-router-dom';

function Album() {

    const [ albumDatas, setAlbumDatas ] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        axios('https://jsonplaceholder.typicode.com/albums')
        .then((response) => {
            setAlbumDatas(response.data)
        })
    }, [])

    const openFolderHandler = (e) => {
        const id = e.target.parentElement.id;
        navigate(`/album=${id}`);
    }

  return (
    <div className="album-container">
        {
            albumDatas.map((albumData) => {
                return (
                    <div key={albumData.id} id={albumData.id} className='album' onClick={openFolderHandler}>
                        <img src={folder} className='folder-img'/>
                        <div className='album-title'>{albumData.title}</div>
                    </div>
                )
            })
        }
    </div>
  );
}

export default Album;

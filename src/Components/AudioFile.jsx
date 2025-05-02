import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const AudioFile=()=>{
    const [title, setTitle] = useState('');
    const [artist, setArtist] = useState('');
    const [audio, setAudio] = useState(null);

    const cloundName = "dorkromuv";
    const audiopreset = "vamshi-audio-fileset";

    const handleFileChange = (event) => {
        setAudio(event.target.files[0]);
    };

    return (
        <>
            <input 
                type="text" 
                placeholder="Enter the song title" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
                style={{ margin: '10px', padding: '10px', borderRadius: '5px', border: '1px solid #ccc', width: '300px' }}
            />
            <input 
                type="text" 
                placeholder="Enter the artist name" 
                value={artist} 
                onChange={(e) => setArtist(e.target.value)} 
                style={{ margin: '10px', padding: '10px', borderRadius: '5px', border: '1px solid #ccc', width: '300px' }}
            />
            <input 
                type="file" 
                id="audio" 
                name="audio" 
                accept="audio/*" 
                onChange={handleFileChange} 
                style={{ margin: '10px', padding: '10px', borderRadius: '5px', border: '1px solid #ccc', width: '300px' }}
            />
        </>
    )
}
export default AudioFile
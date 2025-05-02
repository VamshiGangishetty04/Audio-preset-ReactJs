import React, { useState, useEffect } from 'react';

const AudioList=()=>{
    const [audio, setAudio] = useState([]);

    const fetchAudio = async () => {
        const response = await fetch("url")
        const data = await response.json();
        setAudio(data);
    }
    useEffect(() => {
        fetchAudio();
    }, []);
return (
    <>
        {audio.length > 0 ? (
            <>
                {audio.map((audio) => (
                    <div key={audio.id} className="card" style={{ width: '18rem', margin: '10px' }}>
                        <img src={audio.image} className="card-img-top" alt={audio.title} />
                        <div className="card-body">
                            <h5 className="card-title">{audio.title}</h5>
                            <p className="card-text">{audio.artist}</p>
                            <audio controls>
                                <source src={audio.audio} type="audio/mpeg" />
                                Your browser does not support the audio element.
                            </audio>
                        </div>
                    </div>
                ))}
            </>
        ) : (
            <p>No audio available</p>
        )}
    </>
);
}
export default AudioList

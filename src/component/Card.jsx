import PropTypes from "prop-types";
import { useRef, useEffect, useState } from "react";
import "../style/inputStyle.css";

const Card = ({ title }) => {
    const mp3Title = title.replace(/ /g, "-");
    const audioRef = useRef(null);
    const [volume, setVolume] = useState(0);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = volume;
            audioRef.current && audioRef.current.play();
        }
        if (volume == 0) {
            audioRef.current && audioRef.current.pause();
        }
    }, [volume]);

    const handleVolumeChange = (e) => {
        const newVolume = parseFloat(e.target.value);
        setVolume(newVolume);
    };

    return (
        <div className="card">
            <audio className="audio-element" ref={audioRef} loop>
                <source src={`/audio/${mp3Title}.mp3`} />
                Your browser does not support the audio element.
            </audio>

            <div className="controllers">
                <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.05"
                    value={volume}
                    onChange={handleVolumeChange}
                />
            </div>

            <div className="card_detail">
                <h1 className="card_title">{title.toUpperCase()} </h1>
                <h1 className="card_volume">{volume * 100}%</h1>
            </div>
        </div>
    );
};

Card.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Card;

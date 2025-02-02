import { useState, useRef } from "react";

const songs = [
    { name: "Song 1", file: "/free-productions/songs/mgp.mp3" },
    { name: "Song 2", file: "/free-productions/songs/song2.mp3" },
    { name: "Song 3", file: "/free-productions/songs/song3.mp3" }
];

export default function MusicPlayer() {
    const [currentSong, setCurrentSong] = useState(null);
    const audioRef = useRef(null);

    const playSong = (file) => {
        setCurrentSong(file);
        // Ensure the audio is loaded and plays on user interaction
        if (audioRef.current) {
            audioRef.current.load(); // Reload the song
            audioRef.current.play().catch((err) => {
                console.log("Autoplay blocked:", err);
            });
        }
    };

    return (
        <div>
            <h1>My Music Collection</h1>
            <ul>
                {songs.map((song, index) => (
                    <li key={index} onClick={() => playSong(song.file)}>
                        🎵 {song.name}
                    </li>
                ))}
            </ul>

            {currentSong && (
                <audio ref={audioRef} controls>
                    <source src={currentSong} type="audio/mp3" />
                    Your browser does not support the audio element.
                </audio>
            )}
        </div>
    );
}

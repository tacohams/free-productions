import React, { useState, useRef } from 'react';

const songs = [
  { name: "Song 1", file: "/free-productions/songs/mgp.mp3" },
  { name: "Song 2", file: "/free-productions/songs/song2.mp3" },
  { name: "Song 3", file: "/free-productions/songs/song3.mp3" },
];

const Songs = () => {
  const [currentSong, setCurrentSong] = useState(null);
  const audioRef = useRef(null);

  const playSong = (song) => {
    setCurrentSong(song);
    if (audioRef.current) {
      audioRef.current.load();
      audioRef.current.play().catch((err) => {
        console.log("Autoplay blocked:", err);
      });
    }
  };

  return (
    <div>
      <h1>My Songs</h1>
      <ul>
        {songs.map((song, index) => (
          <li key={index} onClick={() => playSong(song)}>
            🎵 {song.name}
          </li>
        ))}
      </ul>

      {currentSong && (
        <div>
          <h2>Now Playing: {currentSong.name}</h2>
          <audio ref={audioRef} controls>
            <source src={currentSong.file} type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
        </div>
      )}
    </div>
  );
};

export default Songs;
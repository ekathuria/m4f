import React from 'react';
import {img1, img2, img3} from './img/index';
import './App.css';

const albums = [
  {
    track: 1,
    title: "Reckoner",
    album: "In Rainbows",
    cover: img1
  }
]

function App() {
  return (
    <div className="App">
        <img src={albums[0].cover}  />
    </div>
  );
}

export default App;

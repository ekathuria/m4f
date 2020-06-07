import React from 'react';
import './Albums.css'
import { img01, img02, img03, img04, img05, img07, img06, img08, img09, img10, img11, img12, img13, img14, img15, img16 } from './../img/index';


const albums = [
  {
    track: 1,
    title: "Reckoner",
    artist: "radiohead",
    cover: img01
  },
  {
    track: 2,
    title: "The Good, The Bad, The Ugly",
    artist: "consequence",
    cover: img02
  },
  {
    track: 3,
    title: "Dull Life",
    artist: "yeahyeahyeahs",
    cover: img03
  },
  {
    track: 4,
    title: "Synthesizer",
    artist: "outkast",
    cover: img04
  },
  {
    track: 5,
    title: "Strength Beyond Strength",
    artist: "pantera",
    cover: img05
  },
  {
    track: 6,
    title: "Blues Dance Raid",
    artist: "steelpulse",
    cover: img06
  },
  {
    track: 7,
    title: "Black Ice",
    artist: "goodiemob",
    cover: img07
  },
  {
    track: 8,
    title: "Brother's Keeper",
    artist: "andersonpaak",
    cover: img08
  },
  {
    track: 9,
    title: "Science",
    artist: "systemofadown",
    cover: img09
  },
  {
    track: 10,
    title: "Tripping Billies",
    artist: "davematthewsband",
    cover: img10
  },
  {
    track: 11,
    title: "Been Use Ta",
    artist: "djshadow",
    cover: img11
  },
  {
    track: 12,
    title: "Inertia Creeps",
    artist: "massiveattack",
    cover: img12
  },
  {
    track: 13,
    title: "This Secret Ninja",
    artist: "afi",
    cover: img13
  },
  {
    track: 14,
    title: "It's Not Up To You",
    artist: "bjork",
    cover: img14
  },
  {
    track: 15,
    title: "Moon Palace",
    artist: "luna",
    cover: img15
  },
  {
    track: 16,
    title: "Back To The Old House",
    artist: "thesmiths",
    cover: img16
  },
]
function Album() {
  return (
    <div className="Albums">
      <div className="container">
        <img className={albums[0].artist} src={albums[0].cover} alt="In Rainbows" />
      </div>
      <div className="container">
        <img className={albums[1].artist} src={albums[1].cover} />
      </div>
      <div className="container">
        <img className="cover" src={albums[2].cover} />
      </div>
      <div className="container">
        <img className="cover" src={albums[3].cover} />
      </div>
      <div className="container">
        <img className="cover" src={albums[4].cover} />
      </div>
      <div className="container">
        <img className="cover" src={albums[5].cover} />
      </div>
      <div className="container">
        <img className="cover" src={albums[6].cover} />
      </div>
      <div className="container">
        <img className="cover" src={albums[7].cover} />
      </div>
      <div className="container">
        <img className="cover" src={albums[8].cover} />
      </div>
      <div className="container">
        <img className="cover" src={albums[9].cover} />
      </div>
      <div className="container">
        <img className="cover" src={albums[10].cover} />
      </div>
      <div className="container">
        <img className="cover" src={albums[11].cover} />
      </div>
      <div className="container">
        <img className="cover" src={albums[12].cover} />
      </div>
      <div className="container">
        <img className="cover" src={albums[13].cover} />
      </div>
      <div className="container">
        <img className="cover" src={albums[14].cover} />
      </div>
      <div className="container">
        <img className="cover" src={albums[15].cover} />
      </div>
    </div>
  );
}

export default Album;
import React from 'react';
import './Tracks.css'
import { img01, img02, img03, img04, img05, img07, img06, img08, img09, img10, img11, img12, img13, img14, img15, img16 } from '../img/index';


// const albums = [
//   {
//     track: 1,
//     title: "Reckoner",
//     artist: "radiohead",
//     lyric: '"dedicated to all human beings..."',
//     cover: img01,
//     alt: "In Rainbows"
//   },
//   {
//     track: 2,
//     title: "The Good, The Bad, The Ugly",
//     artist: "consequence",
//     lyric: '"and this is for the hoods, the crabs, the junkies..."',
//     cover: img02,
//     alt: "Don't Quit Your Job"
//   },
//   {
//     track: 3,
//     title: "Dull Life",
//     artist: "yeahyeahyeahs",
//     lyric: "we've seen the nightmare of your lies...",
//     cover: img03,
//     alt: "It's Blitz"
//   },
//   {
//     track: 4,
//     title: "Synthesizer",
//     artist: "outkast",
//     lyric: "all's well. nothing's well...",
//     cover: img04,
//     alt: "Aquemini"
//   },
//   {
//     track: 5,
//     title: "Strength Beyond Strength",
//     artist: "pantera",
//     lyric: "you're working for perfect bodies, perfect minds, perfect neighbors, i'm helping to legalize dope on your pristine streets, i'm making a fortune...",
//     cover: img05,
//     alt: "Far Beyond Driven"
//   },
//   {
//     track: 6,
//     title: "Blues Dance Raid",
//     artist: "steelpulse",
//     lyric: "...pigs come to destroy, rasta cry blood, dreadlocks cry blood",
//     cover: img06,
//     alt: "True Democracy"
//   },
//   {
//     track: 7,
//     title: "Black Ice",
//     artist: "goodiemob",
//     lyric: "...yellows and greens and blues and browns and greys and hues that ooze beneath dilapidated wood",
//     cover: img07,
//     alt: "Still Standing"
//   },
//   {
//     track: 8,
//     title: "Brother's Keeper",
//     artist: "andersonpaak",
//     lyric: "shit, i'm grown, but still a baby...",
//     cover: img08,
//     alt: "Oxnard"
//   },
//   {
//     track: 9,
//     title: "Science",
//     artist: "systemofadown",
//     lyric: "spirit moves through all things...",
//     cover: img09,
//     alt: "Toxicity"
//   },
//   {
//     track: 10,
//     title: "Tripping Billies",
//     artist: "davematthewsband",
//     lyrics: "...you and me and all our friends",
//     cover: img10,
//     alt: "Crash"
//   },
//   {
//     track: 11,
//     title: "Been Use Ta",
//     artist: "djshadow",
//     lyric: "when you turn your idols into rivals...",
//     cover: img11,
//     alt: "Our Pathetic Age"
//   },
//   {
//     track: 12,
//     title: "Inertia Creeps",
//     artist: "massiveattack",
//     lyric: "i bounce off walls, lose my footing, and fall...",
//     cover: img12,
//     alt: "Mezzanine"
//   },
//   {
//     track: 13,
//     title: "This Secret Ninja",
//     artist: "afi",
//     lyric: "give me a fuckin' break...",
//     cover: img13,
//     alt: "Very Proud Of Ya"
//   },
//   {
//     track: 14,
//     title: "It's Not Up To You",
//     artist: "bjork",
//     lyric:"i can decide what i give, but it's not up to me what i get given...",
//     cover: img14,
//     alt: "Vespertine"
//   },
//   {
//     track: 15,
//     title: "Moon Palace",
//     artist: "luna",
//     lyric: "well, we're travelin' light, gonna speed through the night...",
//     cover: img15,
//     alt: "Penthouse"
//   },
//   {
//     track: 16,
//     title: "Back To The Old House",
//     artist: "thesmiths",
//     lyric: "are you still there?",
//     cover: img16,
//     alt: "Complete"
//   },
// ]

// function Track() {
//   return (
//     <div className="Albums">
//       <div className="container">
//         <img src={albums[0].cover} alt="In Rainbows" />
//         <div className={albums[0].artist}>
//           <p>{albums[0].lyric}</p>
//         </div>
//       </div>
//     </div>
//   );
// }

const Track = props => {
  return (
    <div className="container">
      <img src={ props.cover } alt={ props.alt } />
      <div className={ props.artist }>
        <p>{ props.lyric }</p>
      </div>
    </div>

  );
}

// const Table = props => {
//   const { characterData, removeCharacter } = props

//   return (
//     <table>
//       <TableHeader />
//       <TableBody characterData={characterData} removeCharacter={removeCharacter} />
//     </table>
//   )
// }


export default Track;
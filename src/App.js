
import React from 'react'; 
import { Component } from 'react';
import './App.css';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import './components/AudioPlayer.css';
import { img01, img02, img03, img04, img05, img07, img06, img08, img09,
img10, img11, img12, img13, img14, img15, img16 } from './img/index';

const tracks = [
  {
    url: "http://m4f.e7a.fun/track1.mp3",
    title: "Reckoner",
    artist: "radiohead",
    lyric: '"dedicated to all human beings..."',
    cover: img01,
    alt: "In Rainbows"
  },
  {
    url: "http://m4f.e7a.fun/track2.mp3",
    title: "The Good, The Bad, The Ugly",
    artist: "consequence",
    lyric: '"and this is for the hoods, the crabs, the junkies..."',
    cover: img02,
    alt: "Don't Quit Your Job"
  },
  {
    url: 3,
    title: "Dull Life",
    artist: "yeahyeahyeahs",
    lyric: "we've seen the nightmare of your lies...",
    cover: img03,
    alt: "It's Blitz"
  },
  {
    url: 4,
    title: "Synthesizer",
    artist: "outkast",
    lyric: "all's well. nothing's well...",
    cover: img04,
    alt: "Aquemini"
  },
  {
    url: 5,
    title: "Strength Beyond Strength",
    artist: "pantera",
    lyric: "you're working for perfect bodies, perfect minds, perfect neighbors, i'm helping to legalize dope on your pristine streets, i'm making a fortune...",
    cover: img05,
    alt: "Far Beyond Driven"
  },
  {
    url: 6,
    title: "Blues Dance Raid",
    artist: "steelpulse",
    lyric: "...pigs come to destroy, rasta cry blood, dreadlocks cry blood",
    cover: img06,
    alt: "True Democracy"
  },
  {
    url: 7,
    title: "Black Ice",
    artist: "goodiemob",
    lyric: "...yellows and greens and blues and browns and greys and hues that ooze beneath dilapidated wood",
    cover: img07,
    alt: "Still Standing"
  },
  {
    url: 8,
    title: "Brother's Keeper",
    artist: "andersonpaak",
    lyric: "shit, i'm grown, but still a baby...",
    cover: img08,
    alt: "Oxnard"
  },
  {
    url: 9,
    title: "Science",
    artist: "systemofadown",
    lyric: "spirit moves through all things...",
    cover: img09,
    alt: "Toxicity"
  },
  {
    url: 10,
    title: "Tripping Billies",
    artist: "davematthewsband",
    lyric: "...you and me and all our friends",
    cover: img10,
    alt: "Crash"
  },
  {
    url: 11,
    title: "Been Use Ta",
    artist: "djshadow",
    lyric: "when you turn your idols into rivals...",
    cover: img11,
    alt: "Our Pathetic Age"
  },
  {
    url: 12,
    title: "Inertia Creeps",
    artist: "massiveattack",
    lyric: "i bounce off walls, lose my footing, and fall...",
    cover: img12,
    alt: "Mezzanine"
  },
  {
    url: 13,
    title: "This Secret Ninja",
    artist: "afi",
    lyric: "give me a fuckin' break...",
    cover: img13,
    alt: "Very Proud Of Ya"
  },
  {
    url: 14,
    title: "It's Not Up To You",
    artist: "bjork",
    lyric:"i can decide what i give, but it's not up to me what i get given...",
    cover: img14,
    alt: "Vespertine"
  },
  {
    url: "http://m4fv5.e7a.fun/track1.mp3",
    title: "Moon Palace",
    artist: "luna",
    lyric: "well, we're travelin' light, gonna speed through the night...",
    cover: img15,
    alt: "Penthouse"
  },
  {
    url: "http://m4fv5.e7a.fun/track1.mp3",
    title: "Back To The Old House",
    artist: "thesmiths",
    lyric: "are you still there?",
    cover: img16,
    alt: "Complete"
  },
];

const Track = (props) => {
  return (
    <div className="container">
      <img src={props.trackDetails.cover} alt={props.trackDetails.alt} />
      <div className={props.trackDetails.artist}>
        <p>{props.trackDetails.lyric}</p>
      </div>
    </div>
  );
}

class AudioPlayerContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {currentTrack: 0};
  }
  render() {
    function next(e) {
      this.setState({currentTrack: 1});
      console.log(track);

      this.setState(function(state) {
        return {
          currentTrack: state.current + 1
        };
      });
    }
    return (
      <AudioPlayer src={tracks[`${this.state.currentTrack}`].url} showSkipControls={true} id="test" onClickNext={next} onPlay={e => console.log("onPlay")} />
    )
  }
}

function App() {
  let key = 0;
  return (
    <div className="App">
      <div className="Tracks">
        {
          tracks.map((track, index) => {
            return <Track trackDetails={tracks[index]} key={key += 1} />
          })
        }
      </div>
      <AudioPlayerContainer currentTrack={tracks[0].url} />
      {/* <AudioPlayer src={tracks[`${track}`].url} showSkipControls={true} id="test" onClickNext={next} onPlay={e => console.log("onPlay")} /> */}
    </div>
  );
}

export default App;

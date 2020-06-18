
import React from 'react'; 
import { Component } from 'react';
import './App.css';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import './components/AudioPlayer.css';
import { img01, img02, img03, img04, img05, img07, img06, img08, img09,
img10, img11, img12, img13, img14, img15, img16 } from './img/index';
import Scramble from 'react-scramble'

const tracks = [
  {
    id: 1,
    url: "http://m4f.e7a.fun/track1.mp3",
    title: "Reckoner",
    artist: "radiohead",
    lyric: '"dedicated to all human beings..."',
    cover: img01,
    alt: "In Rainbows"
  },
  {
    id: 2,
    url: "http://m4f.e7a.fun/track2.mp3",
    title: "The Good, The Bad, The Ugly",
    artist: "consequence",
    lyric: '"and this is for the hoods, the crabs, the junkies..."',
    cover: img02,
    alt: "Don't Quit Your Job"
  },
  {
    id: 3,
    url: "http://m4f.e7a.fun/track3.mp3",
    title: "Dull Life",
    artist: "yeahyeahyeahs",
    lyric: "we've seen the nightmare of your lies...",
    cover: img03,
    alt: "It's Blitz"
  },
  {
    id: 4,
    url: "http://m4f.e7a.fun/track4.mp3",
    title: "Synthesizer",
    artist: "outkast",
    lyric: "all's well. nothing's well...",
    cover: img04,
    alt: "Aquemini"
  },
  {
    id: 5,
    url: "http://m4f.e7a.fun/track5.mp3",
    title: "Strength Beyond Strength",
    artist: "pantera",
    lyric: "you're working for perfect bodies, perfect minds, perfect neighbors, i'm helping to legalize dope on your pristine streets, i'm making a fortune...",
    cover: img05,
    alt: "Far Beyond Driven"
  },
  {
    id: 6,
    url: "http://m4f.e7a.fun/track6.mp3",
    title: "Blues Dance Raid",
    artist: "steelpulse",
    lyric: "...pigs come to destroy, rasta cry blood, dreadlocks cry blood",
    cover: img06,
    alt: "True Democracy"
  },
  {
    id: 7,
    url: "http://m4f.e7a.fun/track7.mp3",
    title: "Black Ice",
    artist: "goodiemob",
    lyric: "...yellows and greens and blues and browns and greys and hues that ooze beneath dilapidated wood",
    cover: img07,
    alt: "Still Standing"
  },
  {
    id: 8,
    url: "http://m4f.e7a.fun/track8.mp3",
    title: "Brother's Keeper",
    artist: "andersonpaak",
    lyric: "shit, i'm grown, but still a baby...",
    cover: img08,
    alt: "Oxnard"
  },
  {
    id: 9,
    url: "http://m4f.e7a.fun/track9.mp3",
    title: "Science",
    artist: "systemofadown",
    lyric: "spirit moves through all things...",
    cover: img09,
    alt: "Toxicity"
  },
  {
    id: 10,
    url: "http://m4f.e7a.fun/track10.mp3",
    title: "Tripping Billies",
    artist: "davematthewsband",
    lyric: "...you and me and all our friends",
    cover: img10,
    alt: "Crash"
  },
  {
    id: 11,
    url: "http://m4f.e7a.fun/track11.mp3",
    title: "Been Use Ta",
    artist: "djshadow",
    lyric: "when you turn your idols into rivals...",
    cover: img11,
    alt: "Our Pathetic Age"
  },
  {
    id: 12,
    url: "http://m4f.e7a.fun/track12.mp3",
    title: "Inertia Creeps",
    artist: "massiveattack",
    lyric: "i bounce off walls, lose my footing, and fall...",
    cover: img12,
    alt: "Mezzanine"
  },
  {
    id: 13,
    url: "http://m4f.e7a.fun/track13.mp3",
    title: "This Secret Ninja",
    artist: "afi",
    lyric: "give me a fuckin' break...",
    cover: img13,
    alt: "Very Proud Of Ya"
  },
  {
    id: 14,
    url: "http://m4f.e7a.fun/track14.mp3",
    title: "It's Not Up To You",
    artist: "bjork",
    lyric:"i can decide what i give, but it's not up to me what i get given...",
    cover: img14,
    alt: "Vespertine"
  },
  {
    id: 15,
    url: "http://m4f.e7a.fun/track15.mp3",
    title: "Moon Palace",
    artist: "luna",
    lyric: "well, we're travelin' light, gonna speed through the night...",
    cover: img15,
    alt: "Penthouse"
  },
  {
    id: 16,
    url: "http://m4f.e7a.fun/track16.mp3",
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
        <p><Scramble autoStart noBreakSpace speed="slow" text="Lorem ipsum dolor"
              steps={[
                {
                  roll: 10,
                  action: '+',
                  type: 'all',
                },
                {
                  roll: 10,
                  action: '+',
                  type: 'forward',
                  // text: `{props.trackDetails.artist}`
                },
              ]}
            />
        </p>
      </div>
    </div>
  );
}

class AudioPlayerContainer extends Component {
  constructor(props) {
    super();
    this.state = {
      currentTrack: 0,
    } 
  }
  onNextTrack() {
    this.setState({
      currentTrack: this.state.currentTrack + 1,
    });
  }
  onPreviousTrack() {
    this.setState({
      currentTrack: this.state.currentTrack - 1,
    })
  }
  trackEnd() {
    this.setState({
      currentTrack: this.state.currentTrack + 1,
    })
  }
  onListen() {
    console.log('listened');
  }
  render() {
    return (
      <AudioPlayer src={tracks[`${this.state.currentTrack}`].url} showSkipControls={true} showJumpControls={false} onClickNext={this.onNextTrack.bind(this)} onClickPrevious={this.onPreviousTrack.bind(this)} onEnded={this.trackEnd.bind(this)} listenInterval="10000" onListen={this.onListen.bind(this)} />
    );
  }
}

function App() {
  return (
    <div className="App">
      <div className="Tracks">
        {
          tracks.map((track, index) => {
            return <Track trackDetails={tracks[index]} key={tracks[index].id} />
          })
        }
      </div>
      <AudioPlayerContainer  />
    </div>
  );
}

export default App;

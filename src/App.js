import React from 'react';
import { connect } from "redux-zero/react";
import {play,stop,next} from './actions';
import './App.css';

//}

const SingleSong =({songs,i,isPlaying}) =>{
  
    return(
      <li key={i} className={isPlaying===true?"current":''}>
        {songs.name} - {songs.artist}<span className="duration">{songs.duration}</span>
      </li>
    );
}
const ListSong =({songs})=>{
  return(
    <ol>
      {
        songs.map((item,index)=>{
          return <SingleSong key={index} songs={item} index={index}/>
        })
      }
  </ol>
  )
}
const App =({songs,nowPlaying})=> {
  
    return (
      <div>
      <h1>Treetunes</h1>
      <ListSong songs={songs}/>
      <button id="play" onClick={play}>Play</button>
      <button id="next" onClick={next}>Next</button>
      <button id="stop "onClick={stop}>Stop</button>
  
    </div>
    );
  }

  const mapToProps = ({nowPlaying,songs}) => ({nowPlaying,songs});
  
  export default connect(mapToProps)(App);

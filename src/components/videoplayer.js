import React  from 'react';
import ReactPlayer from 'react-player';
// import '../../css/reactPlayer.css';
// import useWindowDimensions from '../common/useWindowDimensions';

const ReactPlayerScaled = (props) => {
  const src = props.src 
  const height = props.height 

  return (
    <div>
        <ReactPlayer
        controls
          url={ src}
          className='react-player'
          playing
          width={"100%"} 
          height={height + "px"} 
        />
    </div>
  );
}

class Player extends React.Component {
  
  render () {
    // console.log(this.props)
    return (
        <ReactPlayerScaled src = {this.props.src} height = {this.props.height}/>
    )
  }
}

export default Player;
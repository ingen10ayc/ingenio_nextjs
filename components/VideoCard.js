
import ReactPlayer from 'react-player'
export const VideoCard = ({ src, isMd, poster }) => {

  return (
    <div className="player-wrapper">
      <ReactPlayer
        url={src}
        className="react-player"
        muted
        playing
        width="100%"
        height="100%"
        controls={true}
        pip={false}
        loop
        light={isMd ? poster : false}
      />
    </div>
  )
}
 
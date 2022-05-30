
import ReactPlayer from 'react-player'
export const VideoCard = ({ src, isMd }) => {

  return (
    <div className="player-wrapper">
      <ReactPlayer
        url={src}
        className="react-player"
        muted
        playing
        width="100%"
        height="100%"
        controls={false}
        pip={false}
        loop
        light={isMd ? 'https://i.ibb.co/cCfgLzp/thumb-hotsale.png' : false}
      />
    </div>
  )
}
 
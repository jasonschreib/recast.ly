import VideoListEntry from '../../src/components/VideoListEntry.js';

var VideoPlayer = (props) => ( 
  <div className="video-player">
    <div className="embed-responsive embed-responsive-16by9">
      <iframe className="embed-responsive-item" src={'https://www.youtube.com/embed/' + props.video.id.videoId} allowFullScreen></iframe>
    </div>
    <div className="video-player-details">
      <h3>{props.video.snippet.title}</h3>
      <div>{props.video.snippet.description}</div>
    </div>
  </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoPlayer.propTypes = {
  video: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default VideoPlayer;

// Videos are played by passing a source url to the iframe tag inside the VideoPlayer component. The video associated with the id included after https://www.youtube.com/embed/ will get played. Because this is also a stateless functional component, we can build it out with our example data.

//  Pass a single video from exampleVideoData into VideoPlayer
//  Update VideoPlayer to play the video it is passed and display its title and descriptions
//  Make sure the tests for VideoPlayer are passing. You can open the tests with npm test
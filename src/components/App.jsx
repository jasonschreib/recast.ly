import VideoList from '../../src/components/VideoList.js';
import VideoPlayer from '../../src/components/VideoPlayer.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPlayingVideo: exampleVideoData[_.random(0, exampleVideoData.length - 1)],
      videoList: exampleVideoData
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(video) {
    console.log('It works! Here is the video', video);
    this.setState({currentPlayingVideo: video});
  }

  // buildVideoQueue() {

  // }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em> view goes here</h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><h5><em>videoPlayer</em> <VideoPlayer video={this.state.currentPlayingVideo} /></h5></div>
          </div>
          <div className="col-md-5">
            <div><h5><em>videoList </em> <VideoList videos={this.state.videoList} handleClick={this.handleClick}/> </h5></div>
          </div>
        </div>
      </div>
    );
  }
}


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;

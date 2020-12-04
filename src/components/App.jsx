import VideoList from '../../src/components/VideoList.js';
import VideoPlayer from '../../src/components/VideoPlayer.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPlayingVideo: '',
      videoQueue: []
    };
    this.handleClick = this.handleClick.bind(this);
    //BIND CLICK!!!
    //set state function on the videoQueue
    // when VideoList instantiates
    // add each video's title to the videoQueue array  
  }

  handleClick() {
    console.log('It works');
    // this.setState(state => ({
    //   currentPlayingVideo: {this.video.snippet.title} //title that was clicked
    // }));
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
            <div><h5><em>videoPlayer</em> <VideoPlayer video={exampleVideoData[0]} /></h5></div>
          </div>
          <div className="col-md-5">
            <div><h5><em>videoList </em> <VideoList videos={window.exampleVideoData} handleClick={this.handleClick}/> </h5></div>
          </div>
        </div>
      </div>
    );
  }
}


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;

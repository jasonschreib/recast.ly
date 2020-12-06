import VideoList from '../../src/components/VideoList.js';
import VideoPlayer from '../../src/components/VideoPlayer.js';
import searchYouTube from '../../src/lib/searchYoutube.js';
import YOUTUBE_API_KEY from '../../src/config/youtube.js';
import Search from '../../src/components/Search.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPlayingVideo: exampleVideoData[_.random(0, exampleVideoData.length - 1)],
      videoList: exampleVideoData
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {
    this.handleSearch('chimpokemon');
  }

  handleClick(video) {
    this.setState({
      currentPlayingVideo: video
    });
  }

  handleSearch(query) {
    var searchObj = {
      key: 'AIzaSyBHSX4n-F3eeobmmBnzQ2MTeJHkPP-6QeY',
      query: query,
      max: 5
    };
    searchYouTube(searchObj, (videos) => {
      this.setState({
        currentPlayingVideo: videos[0],
        videoList: videos
      });
    });
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em> <Search handleSearchInputChange={_.debounce(this.handleSearch, 500)} /> </h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><h5><em>videoPlayer</em> <VideoPlayer video={this.state.currentPlayingVideo} /></h5></div>
          </div>
          <div className="col-md-5">
            <div><h5><em>videoList </em> 
              <VideoList
                videos={this.state.videoList} 
                handleClick={this.handleClick}/> </h5></div>
          </div>
        </div>
      </div>
    );
  }
}


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;

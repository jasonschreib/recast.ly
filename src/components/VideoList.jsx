import VideoListEntry from '../../src/components/VideoListEntry.js';

var VideoList = (props) => (
  <div className="video-list">
    {props.videos.map(eachVideo => <VideoListEntry video={eachVideo} />)}
  </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;


/*
update app (final component) with a videoList of videoListEntries
*/


/* <div><h5><em>{props.videos[0]}</em> view goes here</h5></div>
    <div><h5><em>VideoListEntry</em> view goes here</h5></div>
    <div><h5><em>VideoListEntry</em> view goes here</h5></div>
    <div><h5><em>VideoListEntry</em> view goes here</h5></div>
    <div><h5><em>VideoListEntry</em> view goes here</h5></div> */

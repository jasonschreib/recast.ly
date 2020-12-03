import { ajax } from 'jquery';

var searchYouTube = (_options, callback) => {
  ajax({
    type: 'GET',
    url: 'https://www.googleapis.com/youtube/v3/search',
    options: {
      key: YOUTUBE_API_KEY,
      query: 'dolla dolla bills y\'all',
      maxResults: 5,
      //type: 'video',
      //videoEmbeddable: true,
    },
    // success: callback(video) {
    //   //embedVideo(video); to be handled
    // },
    // failure: function(response) {
    //   console.log('Request Failed');
    // }
  });
  
  
}; 

export default searchYouTube;


// Use jQuery to send a GET request to the search endpoint. This is the only time you should use jQuery in this sprint
//  Accept a callback function that is invoked with the videos array that is returned from hitting the endpoint
//  Accept an options object with the following properties:
//  query - the string to search for
//  max - the maximum number of videos to get, which should default to 5
//  key - an authorized YouTube Browser API key
//  Only GET embeddable videos
//  Make sure all the tests for searchYouTube are passing. You can open the tests with npm test
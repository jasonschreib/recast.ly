var searchYouTube = (options, callback) => {
  $.get('https://www.googleapis.com/youtube/v3/search', {
    key: options.key, 
    q: options.query,
    maxResults: options.max,
    type: 'video', 
    videoEmbeddable: true,
    part: 'snippet'
  })
    .done(({items}) => {
      if (callback) {
        callback(items);
      } 
  
    })
    .fail(({error}) => {
      console.log('It failed');
    });
};
//   $.ajax({
//     type: 'GET',
//     url: 'https://www.googleapis.com/youtube/v3/search',
//     data: {
//       key: options.key, 
//       q: options.query,
//       maxResults: options.max,
//       type: 'video', 
//       videoEmbeddable: true,
//       part: 'snippet'
//     },
//     success: (response) => { console.log(response.items); /*callback(response.items*/ }, //callback func to be defined,
//     failure: (response) => {
//       console.log('Request Failed', response);
//     }
//   });  
// }; 

export default searchYouTube;


// Use jQuery to send a GET request to the search endpoint. This is the only time you should use jQuery in this sprint
//  Accept a callback function that is invoked with the videos array that is returned from hitting the endpoint
//  Accept an options object with the following properties:
//  query - the string to search for
//  max - the maximum number of videos to get, which should default to 5
//  key - an authorized YouTube Browser API key
//  Only GET embeddable videos
//  Make sure all the tests for searchYouTube are passing. You can open the tests with npm test
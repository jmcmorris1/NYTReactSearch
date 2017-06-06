// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require('axios');

// New York Times API
var nytAPI = "d1e5137dd4224d6bafd71c58c185d4e7";

// Helper Functions
var helpers = {

	runQuery: function(termc, start, end){

		var term = term.trim();
		var start = start.trim() + "0101";
		var end = end.trim() + "1231";

		 return axios.get('https://api.nytimes.com/svc/search/v2/articlesearch.json', {
      params: {
          'api-key': APIKey,
          'q': term,
          'begin_date': start,
          'end_date': end
      }
    })

    .then(function(results){

      return results.data.response;

    });
  },

  getSaved: function(){

    return axios.get('/api/saved')
      .then(function(results){

        return results;
      })
  },

  postSaved: function(title, date, url){

    var newArticle = {title: title, date: date, url: url};
    return axios.post('/api/saved', newArticle)
      .then(function(results){
        return results._id;
      })

  },

  deleteSaved: function(title, data, url){

    return axios.delete('/api/saved', {
      params: {
          'title': title,
          'data': data,
          'url': url,
      }
    })
    .then(function(results){
      return results;
    })
  }

}


// We export the helpers function 
module.exports = helpers;
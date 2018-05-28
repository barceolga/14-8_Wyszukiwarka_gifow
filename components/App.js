var GIPHY_API_URL = 'http://api.giphy.com';
var GIPHY_PUB_KEY = 'xNEbJNreq63SELIRSP6e0Y3N3jnasbV3';


App = React.createClass({
  //1. Sets initial state

    getInitialState() {
      return {
        loading: false,
        searchingText: '',
        gif: {}
      };
    },

  //2. This method sets state loading to true and calls getGif function.

    handleSearch: function(searchingText) {
      //2.1 gets the initial text that has been entered by the user
      this.setState({
        loading: true
        //2.2 shows that the loading process is on
      });
      this.getGif(searchingText, function(gif) { // start to dowloand gif
        this.setState({
          loading: false,
          // 2.3 stops showwing that the loading proces is on
          gif: gif,
          // 2.4 puts a new gif that has been got from searching
          searchingText: searchingText
          //2.5 sets the new state for the searching text
        });
      }.bind(this));
    },

//.3. This method gets gif from giphy.com and returns gif object as callback

    getGif: function(searchingText, callback) {
      //3.1.This method has 2 initial parameters: a text thas was entered (searchingText) and a function to be done after dowloanding the text (callback)
      var url = GIPHY_API_URL + 'v1/gifs/random?api_key=' + GIPHY_PUB_KEY + '&tag=' + searchingText;
      console.log(url);
      // 3.2. Here we're creating URL adres for API GIPHY
      var xhr = new XMLHttpRequest();
      //3.3 We're calling the entire request for server and sending this request
      xhr.open('GET', url);
      xhr.onload = function(){
        if(xhr.status === 200) {
          var data = JSON.parse(xhr.responseText).data;
          //3.4. In the response object we have an object with data. Here we're are unwrapping this data into variable called data in order to not to have to write response.data every time
          var gif = {
            //3.5. We're reasembling the gif object with the data received from server
              url: data.fixed_width_downsampled_url,
              sourceUrl: data.url
            };
            callback(gif);
            //3.6. We're putting the object gir into the function callback, the very same we've already set as a second parameter into getGif method.
          }
      };
        xhr.send();
    },

    render: function() {
      var styles = {
        margin: '0 auto',
        textAlign: 'center',
        width: '90%'
      };

      return (
        <div style={styles}>
            <h1>GIFs search engine!</h1>
            <p>Find a gif on <a href='http://giphy.com'>giphy</a>. Push enter to get another gif </p>
            <Search onSearch={this.handleSearch} />
          <Gif
                loading={this.state.loading}
                url={this.state.gif.url}
                sourceUrl={this.state.gif.sourceUrl} />
        </div>
      );
    }
});

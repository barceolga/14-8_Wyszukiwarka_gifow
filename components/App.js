App = React.createClass({
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
            <Search />
          <Gif />
        </div>
      );
    }
});

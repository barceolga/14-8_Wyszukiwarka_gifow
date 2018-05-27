Search = React.createClass({
    render: function() {
      var styles = {
          fontSize: '1.5em',
          width: '90%',
          maxWidth: '350px'
      },
      return <input
                type="text"
                onChange={this.handleChange}
                placeholder="Enter a search term here"
                style={styles}
                value={this.state.searchTerm}
              />
    }
});

import React, { Component } from 'react';

class SearchBar extends Component {
  state = {
    searchTerm: ''
  };

  onChangeHandler(e) {
    this.setState({ searchTerm: e.target.value });
  }

  render() {
    return (
      <div>
        <input
          onChange={this.onChangeHandler.bind(this)}
          value={this.state.searchTerm}
        />
      </div>
    );
  }
}

export default SearchBar;

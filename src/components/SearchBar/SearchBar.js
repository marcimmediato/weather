import React, { Component } from 'react';

class SearchBar extends Component {
  state = {
    searchTerm: ''
  };

  onChangeHandler(e) {
    this.setState({ searchTerm: e.target.value });
  }

  onSubmitHandler(e) {
    e.preventDefault();
    console.log('form submitted:', this.state.searchTerm);
  }

  render() {
    return (
      <form className="SearchBar" onSubmit={this.onSubmitHandler.bind(this)}>
        <input
          onChange={this.onChangeHandler.bind(this)}
          value={this.state.searchTerm}
        />
        <button>Search</button>
      </form>
    );
  }
}

export default SearchBar;

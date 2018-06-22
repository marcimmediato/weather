import React, { Component } from 'react';
import { Button, Input } from 'semantic-ui-react';

class SearchBar extends Component {
  state = {
    searchTerm: ''
  };

  onChangeHandler(e) {
    this.setState({ searchTerm: e.target.value });
  }

  onSubmitHandler(e) {
    e.preventDefault();
    this.props.fetch(this.state.searchTerm);
  }

  render() {
    return (
      <form className="SearchBar" onSubmit={this.onSubmitHandler.bind(this)}>
        <Input
          placeholder="Type your city"
          onChange={this.onChangeHandler.bind(this)}
          value={this.state.searchTerm}
        />
        <Button className="secondary">Search</Button>
      </form>
    );
  }
}

export default SearchBar;

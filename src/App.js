import React, { Component } from 'react';
import Loader from './Loader/Loader';
import Table from './Table/Table';

class App extends Component {
  state = {
    isLoading: true,
    data: [],
  };

  async componentDidMount() {
    const response = await fetch(
      `http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`
    );
    const data = await response.json();
    this.setState({
      isLoading: false,
      data,
    });
  }

  onSort = (sortField) => {
    console.log(sortField);
  };

  render() {
    return (
      <div className='container'>
        {this.state.isLoading ? (
          <Loader />
        ) : (
          <Table data={this.state.data} onSort={this.onSort} />
        )}
      </div>
    );
  }
}

export default App;

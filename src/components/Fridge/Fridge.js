import React from 'react';
import axios from 'axios';
import Layout from '../Layout/Layout';
import FridgeEntry from '../FridgeEntry/FridgeEntry';
import FridgeList from '../FridgeList/FridgeList';

class Fridge extends React.Component {
  constructor(props) {
    super(props);
    this.setState = this.setState.bind(this);
    this.state = {
      promiseIsResolved: false,
      inventory: [],
    };
  }

  handleDelete = id => {
    axios.delete(`/.netlify/functions/fridge-remove?id=${id}`).then(res => {
      this.setState({ promiseIsResolved: false });
      this.handleList();
    });
  };

  unresolvePromise = () => {
    this.setState({ promiseIsResolved: false });
    this.handleList();
  };

  handleUpdate = (id, quantity, unit) => {
    axios
      .post(
        `/.netlify/functions/fridge-update?id=${id}&quantity=${quantity}&unit=${unit}`
      )
      .then(res => {
        this.setState({ promiseIsResolved: false });
        this.handleList();
        console.log(res);
      });
  };

  handleList = () => {
    console.log(this.setState);
    axios.get('/.netlify/functions/fridge-read').then(res => {
      this.setState({ inventory: res.data.data });
      this.setState({ promiseIsResolved: true });
      console.log('List Handled');
    });
  };

  render() {
    const { promiseIsResolved } = this.state;
    return (
      <Layout>
        <div>
          <FridgeEntry
            handleList={this.handleList}
            unresolvePromise={this.unresolvePromise}
          />
        </div>
        <FridgeList
          inventory={this.state.inventory}
          handleList={this.handleList}
          promiseIsResolved={this.state.promiseIsResolved}
          handleDelete={this.handleDelete}
          handleUpdate={this.handleUpdate}
        />
      </Layout>
    );
  }
}

export default Fridge;

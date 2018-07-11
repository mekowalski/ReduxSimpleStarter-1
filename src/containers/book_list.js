import React, { Component } from 'react';

//1. import connect function from react-redux
import { connect } from 'react-redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li key={book.title} className="list-group-item">{book.title}</li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

//3. key function, take application state as argument and returns object
//state contains array of books and activeBook
//this function is GLUE between react and redux
function mapStateToProps(state) {
  //what is returned will show up as props inside of BookList
  return {
    books: state.books
  };
}

//2. conect takes a function and component and produces a container
export default connect(mapStateToProps)(BookList);

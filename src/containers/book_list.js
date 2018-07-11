//purpose of this file is to render the list of books
import React, { Component } from 'react';

//creates a UL
//calls a helper function this.renderList
//this.renderList will map over array of books
//for each book in array, create an li containing book title
export default class BookList extends Component {
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

import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
  //add initial check
  //when the app first boots, return early with this 'warm up' message
  //once book is clicked, it will update app state, casues container to rerender
  render() {
    if (!this.props.book) {
      return <div>Select a book to get started</div>;
    }

    return (
      <div>
        <h3>Details for: </h3>
        <div>Title: {this.props.book.title}</div>
        <div>Pages: {this.props.book.pages}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    book: state.activeBook
  }
}

export default connect(mapStateToProps)(BookDetail);

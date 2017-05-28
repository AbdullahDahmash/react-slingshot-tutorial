import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as bookActions from '../../actions/bookActions';

class Book extends Component{
  constructor(props) {
    super(props);
  }

  submitBook(input) {
    this.props.createBook(input)
  }

  render() {
    let titleInput;
    return(
      <div>
        <h3>Book</h3>
        <ul>
          {this.props.books.map((b, i) => <li key={i}>{b.title}</li>)}
        </ul>
        <div>
          <h3>Books Form</h3>
          <form
          onSubmit={(e) => {
            e.preventDefault();
            let input = {title: titleInput.value};
            this.submitBook(input);
            e.target.reset();
          }}>
            <input type="text" name="title" ref={(node) => titleInput = node} />
            <input type="submit" />
          </form>
        </div>
      </div>
    )
  }
}

const mapsStateToProps = (state, ownProps) => {
  return {
    books: state.books,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createBook: book => dispatch(bookActions.createBook(book))
  }
};

export default connect(mapsStateToProps, mapDispatchToProps)(Book)

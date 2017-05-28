import { Component } from 'react';

export default class Book extends Component{
  constructor(props) {
    super(prosp);
  }

  submitBook(input) {
    alert('Submitted');
  }

  render() {
    let titleInput;
    return(
      <div>
        <h3>Book</h3>
        <ul>
          {}
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

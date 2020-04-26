import React, {Component} from 'react';
import {graphql} from 'react-apollo';
import {getBooksQuery} from '../queries/queries';
import BookDetails from './BookDetails';

class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null
    }
  }
  displayBooks() {
    var data = this.props.data;
    if(data.loading) {
      return (<div>Loading books</div>);
    } else {
      return data.books.map(book => {
       return (<li key = {book.id} onClick={(e) => {this.setState({selected: book.id})}}>{book.name}</li>)
      });
    }
  }
  render() {
    return (
      <div>
        <ul id="book-list">
          {this.displayBooks()}
        </ul>
        <BookDetails bookId = {this.state.selected}></BookDetails>
      </div>
    );
  }
}

// function displayBooks() {
//   const { loading, error, data } = useQuery(getBooksQuery);
//   debugger;
//   if (error) return `Error! ${error.message}`;
//   if (loading) {
//     return (<div>Loading...</div>);
//   } else {
//     return data.books.map(book => {
//       return (
//       <li>{book.name}</li>
//       )
//     });
//   }
// }
// function BookList() {
//   return (
//     <div id="main">
//      <ul id="book-list">
//          <li>Book name</li>
//      </ul>
//     </div>
//   );
// }

export default graphql(getBooksQuery)(BookList);

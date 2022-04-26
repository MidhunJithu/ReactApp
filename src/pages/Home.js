import React from "react";
import { Form } from "react-bootstrap";
import {getBooks,BooksCard} from "../data/Books";

const books =  getBooks(); 
  class Home extends React.Component{
    constructor(props){
      super(props);
      this.state = {filter:'',books:books};
      this.searchBook = this.searchBook.bind(this);  
    }
    searchBook(event){
      let value = event.target.value;
      this.setState({filter:value});
    }

    render(){   
      return(
        <div>
          <h1>Top  picks to Read </h1>
          <Form.Group className="mb-3">
            <Form.Control placeholder="Search Books" onChange={this.searchBook}/>
          </Form.Group>

          <BooksCard books = {this.state.books} filter={this.state.filter}/>
        </div>
      );
    }

  }
  
  export default Home;
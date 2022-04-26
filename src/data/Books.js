import { UseCard } from "../utilities";
import React from "react";

const books =[
    {title:'All About Love',author:'Renee P.',date:'04/10/2000',amount:'$ 150',id:1,src:'https://www.powells.com/portals/0/images/9780060959470.jpg'},
    {title:'Desert Solitaire: A Season in the Wilderness',author:'Edward Abbey',date:'04/10/2010',amount:'$ 50',id:2,src:'https://www.powells.com/portals/0/images/9780671695880.jpg'},
    {title:'Disgracee',author:'J. M. Coetzee',date:'02/01/2021',amount:'$ 100',id:3,src:'https://www.powells.com/portals/0/images/9780140296402.jpg'},
    {title:'Gilead ',author:'Marilynne Robinson',date:'04/10/1996',amount:'$ 200',id:4,src:'https://www.powells.com/portals/0/images/9780312424404.jpg'},
    {title:'Hitchhiker Guide to the Galaxy',author:'Douglas Adams',date:'05/11/2021',amount:'$ 150',id:5,src:'https://www.powells.com/portals/0/images/9780345418913.jpg'},
    {title:'Infinite Jest',author:'David Foster Wallace',date:'22/05/1990',amount:'$ 150',id:6,src:'https://www.powells.com/portals/0/images/9780316306058.jpg'},
    {title:'Lolita ',author:'Vladimir Nabokov',date:'10/02/2008',amount:'$ 150',id:7,src:'https://www.powells.com/portals/0/images/9780679723165.jpg'},
    {title:'To Kill a Mockingbird  ',author:'Harper Lee',date:'10/02/2007',amount:'$ 150',id:8,src:'https://www.powells.com/portals/0/images/9780061120084.jpg'}
  ]
  export  function getBooks(){
      return books;
  }
  export function bookById(id){
    return (books.filter((book) => book.id === id));
  }
  export function  BooksCard({books,filter}){
    return(
      books.filter((book) => (
        filter.length ? book.title.toLowerCase().startsWith(filter.toLowerCase()) : true)            
        ).map((book) =>(
        <div className="cardWrap" key={book.id.toString()}>
          <UseCard  key={book.id.toString()} src={book.src} title={book.title} content={book.author} style={{ width: '18rem' , margin : '15px',minHeight:'300px'}} bookId={book.id}>
          </UseCard>
        </div>
      ))
    );
  }

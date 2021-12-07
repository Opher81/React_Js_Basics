import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Book from './Book.jsx';

import {books} from './books';



function BookList() {
  console.log('hello');
  return (
    <section className='bookList'>
      
     { books.map((book, index) => {
        return <Book key={index} {...book}/>
      }) } 
    </section>
  )
}


ReactDOM.render(
   <BookList />,
  document.getElementById('root')
);


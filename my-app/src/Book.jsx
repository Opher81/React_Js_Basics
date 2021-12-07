import React from "react";
import './index.css';

const clickHandler = (e) => {
  console.log(e);
} 

const Title = (title) => {
  return  <h1 style={{color: 'antiquewhite'}} onClick={clickHandler}>{title}</h1>
}

const Book = ({id, img, title, author}) => {

return <article className='book' onMouseOver={(e) => console.log()}>
    <img className='book-img' src={img} alt=''></img>
    <Title title/>
    <h1 className='author'>{author}</h1>
  </article>
};

export default Book;
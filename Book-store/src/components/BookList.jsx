import React from 'react'
import BookShow from './BookShow'

function BookList({list,onDelete,onUpdate}) {
  
  const renderBooks = list.map((ele,ind)=>(
    <BookShow book ={ele} key = {ind} onDelete = {onDelete} onUpdate= {onUpdate}/>
  ))
  return (
    <div className='book-list'>
      {renderBooks}
    </div>
  )
}

export default BookList

import React, { useState } from 'react'
import BookEdit from './BookEdit'

function BookShow({book,onDelete,onUpdate}) {
    const [visible,setVisible] = useState(false);

  const handleClick = ()=>{
    onDelete(book._id)
  }
  const toggleEdit = ()=>{
    setVisible(!visible)
  }
  const onUpdateClick = (_id,newTitle) =>{
    setVisible(!visible);
    onUpdate(_id,newTitle)
  }
  return (
    <div className='book-show'>
       <img  src={`https://picsum.photos/seed/${book._id}/300/200`}/>
       <div>

     {visible ? <BookEdit onUpdate={onUpdateClick} book={book}/>:<h3>{book.bookName}</h3>}
       </div>
     
      <div className='actions'>
        <button className='delete' onClick={handleClick}>delete</button>
        <button className='edit' onClick={toggleEdit}>delete</button>
      </div>
      
    </div>
  )
}

export default BookShow

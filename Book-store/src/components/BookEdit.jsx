import React, { useState } from 'react'

function BookEdit({onUpdate,book}) {
  const [newTitle,setnewTitle] = useState(book.bookName);
  const handleClick = ()=>{
    onUpdate(book.id,newTitle);
  }
  return (
    <div className='book-edit'>
        
      <input className='input' value={newTitle} onChange={(e) => setnewTitle(e.target.value)} />
      <button className='button is-primary' onClick={handleClick} >
        Update
      </button>
    </div>
  )
}

export default BookEdit

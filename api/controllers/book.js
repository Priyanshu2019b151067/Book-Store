const Book = require('../models/Book')
const createBook = async (req,res) =>{
   const {bookName} = req.body;
   try{
    const data = await Book.create({
        bookName : bookName
    })
    res.status(200).json(data);
   }catch(err){
    console.log(err);
   }
   /*
   try{
    const newData =  await Book.findOne({bid : id});
    res.status(200).json(newData);
   }catch(err){
    console.log(err);
   }
   */
}

const getBooks = async (req,res) =>{
    try
    {
        const data = await Book.find();
        res.json(data);
    }catch(err){
        console.log(err);
    }
}
const deleteBook = async(req,res) =>{
    const _id = req.params._id;
    console.log(_id);

    try{
        const data = await Book.findByIdAndDelete(_id)
        console.log(data);
        res.status(200).json({data});
    }catch(err){
        console.log(err);
    }
}
const editBook = async (req,res) =>{
    const {_id,newTitle} = req.body;
    console.log(_id);
    //const book = Book.findOne({bid: id})
   const book = await Book.findByIdAndUpdate(_id,{bookName : newTitle},{ new: true });
   console.log(book);
   res.status(200).json({book});
}
module.exports = {
    createBook,
    getBooks,
    deleteBook,
    editBook
}
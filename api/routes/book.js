const express = require('express');
const Controllers = require('../controllers/book')
const router = express.Router();

router.post('/create',Controllers.createBook);
router.get('/all',Controllers.getBooks);
router.delete('/delete/:_id',Controllers.deleteBook);
router.put('/update',Controllers.editBook);
module.exports = router
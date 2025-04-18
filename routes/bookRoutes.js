const express = require('express');
const bookcontroller = require('../controllers/bookControllers');
const router = express.Router();
router.get('/books',bookcontroller.getBooks);
router.post('/books',bookcontroller.createBooks);
router.put('/books/:id',bookcontroller.updateBook);
router.delete('/books/:id',bookcontroller.deleteBooks);

module.express = router;

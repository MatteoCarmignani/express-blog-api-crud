
const express = require("express");


const router = express.Router();


const postController = require('../controllers/postController');


// Rotte di CRUD sulla risorsa pizze
// index
router.get('/', postController.index);

// show
router.get('/:id', postController.show);

// store
router.post('/', postController.store);

// update
router.put('/:id', postController.update);

// modify
router.patch('/:id', postController.modify);

// destroy
router.delete('/:id', postController.destroy);

module.exports = router;
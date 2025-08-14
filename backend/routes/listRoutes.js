const express = require('express');
const router = express.Router();
const listController = require('../controllers/listController');

// Route to create a new list
router.post('/', listController.createList);

// Route to get all lists
router.get('/', listController.getAllLists);

// Route to get a specific list by ID
router.get('/:id', listController.getListById);

// Route to update a specific list by ID
router.put('/:id', listController.updateList);

// Route to delete a specific list by ID
router.delete('/:id', listController.deleteList);

module.exports = router;
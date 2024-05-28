const express = require('express');
const User = require('../models/user');
const {handleGetAllUsers, getUserById, handleUpdateUserById, handleDeleteUserById, handleCreateNewUser} = require("../controllers/user")
const router = express.Router()



router.get('/', handleGetAllUsers)

router.route("/:id")
    .get(getUserById)
    .patch(handleUpdateUserById)
    .delete(handleDeleteUserById)

router.post("/", handleCreateNewUser )

module.exports = router
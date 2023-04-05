const router = require('express').Router()
const {getUsers, getUser, postUser, updateUser, deleteUser} = require('../../controllers/userController')

router.route('/')
    .get(getUsers)
    .post(postUser)

router.route('/:id')
    .get(getUser)
    .put(updateUser)
    .delete(deleteUser)

router.route('/:id/friends/friendId')
    .post()
    .delete()

module.exports = router;
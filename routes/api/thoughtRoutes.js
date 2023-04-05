const router = require('express').Router()
const {getThoughts, getThought, postThought, updateThought, deleteThought, postReaction, deleteReaction} = require('../../controllers/thoughtController')

router.route('/')
    .get(getThoughts)
    .post(postThought)

router.route('/:id')
    .get(getThought)
    .put(updateThought)
    .delete(deleteThought)

router.route('/:id/reactions')
    .post(postReaction)
    .delete(deleteReaction)

module.exports = router;
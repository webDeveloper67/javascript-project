import express from 'express'
import {challengeById, createChallenge, getArrayChallenges} from './../controllers/challenges.js'
const router = express.Router()

router.route('/').post(createChallenge)
router.route('/array-challenges').get(getArrayChallenges)
router.route('/:challengeId').get(challengeById)

export default router
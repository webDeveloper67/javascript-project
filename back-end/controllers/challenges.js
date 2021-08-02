import Challenge from './../models/Challenge.js'

const createChallenge = async (req, res, next) => {
  try {
    const challenge = new Challenge(req.body)

    const createdChallenge = await challenge.save()

    return res.status(200).json(createdChallenge)
  } catch (error) {
    next(error);
  }
}

const challengeById = async (req, res, next) => {
  try {
    const challenge = await Challenge.findById(req.params.challengeId)

    if(challenge) {
      res.json(challenge)
    }
  } catch (error) {
    next(error)
  }
}

const getArrayChallenges = async (req, res, next) => {
  const query  = Challenge.where({ category: 'javascript arrays' })
  let test = await query.find((err, challenge) => {
    if(err) return 'error happened'
    if(challenge) {
      return res.json(challenge)
    }
  })
}

export {createChallenge, challengeById, getArrayChallenges}
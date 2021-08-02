import mongoose from 'mongoose'

const challengeSchema = mongoose.Schema({
  challengeName: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true,
    enum: {
      values: ['javascript basics', 'javascript arrays', 'javascript dates', 'javascript objects', 'javascript Sets'],
    }
  },
  description: {
    type: String,
    required: true
  },
  code: [{
    solution: String,
  }],
  difficulty: {
    type: String,
    enum: {
      values: ['easy', 'medium', 'difficult'],
      message: 'Difficulty is either: easy, medium, or difficult'
    }
  }
}, {
  timestamps: true
})

const Challenge = mongoose.model('Challenge', challengeSchema)

export default Challenge

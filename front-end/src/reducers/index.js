import { combineReducers } from 'redux';
import {arrayChallengeReducer} from './arrayChallengeReducer'

const rootReducer = combineReducers({
  arrayChallenge: arrayChallengeReducer,
})

export default rootReducer
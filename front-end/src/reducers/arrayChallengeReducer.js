import {GET_ALL_ARRAY_CHALLENGES, GET_SINGLE_ARRAY_CHALLENGE} from './../actions'

const initialState = {
  arrayItems: [],
  singleArrayChallenge: []
}

export const arrayChallengeReducer = (state = initialState , action) => {
  switch(action.type) {
    case GET_ALL_ARRAY_CHALLENGES:
      const item = action.payload
      return {
        ...state,
        arrayItems: item
      }
    case GET_SINGLE_ARRAY_CHALLENGE:
      const singleArrChall = action.payload
      return {...state, singleArrayChallenge: singleArrChall };
    default:
      return state
  }
}


import axios from 'axios'
import thunk from 'redux-thunk'
import { v4 as uuidv4 } from 'uuid'

export const ADD_ARRAY_CHALLENGE = "ADD_ARRAY_CHALLENGE"

export const GET_ALL_ARRAY_CHALLENGES = "GET_ALL_ARRAY_CHALLENGES"
export const GET_SINGLE_ARRAY_CHALLENGE = "GET_SINGLE_ARRAY_CHALLENGE"




export const addArrayChallenge = values => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    const {data} = await axios.post(`/api/challenges`, values, config)

    dispatch({
      type: ADD_ARRAY_CHALLENGE,
      payload: data
    })
  } catch (error) {
    console.log(error)
  }
  // type: "ADD_ARRAY_CHALLENGE",
  // payload: {
  //   id: uuidv4(),
  //   name
  // }
};

export const getAllArrayChallenges = () => async dispatch => {
  try {
    const {data} = await axios.get('/api/challenges/array-challenges')

    dispatch({
      type: GET_ALL_ARRAY_CHALLENGES,
      payload: data
    })
  } catch (error) {
    console.log(error);
  }
}

export const getSingleArrayChallenge = id => async dispatch => {
  try {
    const {data} = await axios.get(`/api/challenges/${id}`)
    
    dispatch({
      type: GET_SINGLE_ARRAY_CHALLENGE,
      payload: data
    })
  } catch (error) {
    console.log(error);
  }
}
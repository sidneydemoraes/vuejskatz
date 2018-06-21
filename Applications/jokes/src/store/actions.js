import * as types from './mutation-types'

const API_BASE_URL = 'https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/'
const API_TEN_JOKES = API_BASE_URL + 'random_ten'
const API_ONE_JOKE = API_BASE_URL + 'random-joke'

export const initJokes = ({commit}) => {
  fetch(API_TEN_JOKES, { method: 'GET' })
  .then(response => response.json())
  .then(json => commit(types.INIT_JOKES, json))
}

export const addJoke = ({commit}) => {
  fetch(API_ONE_JOKE, { method: 'GET' })
  .then(response => response.json())
  .then(json => commit(types.ADD_JOKE, json))
}

export const removeJoke = ({commit}, index) => {
  commit(types.REMOVE_JOKE, index)
}
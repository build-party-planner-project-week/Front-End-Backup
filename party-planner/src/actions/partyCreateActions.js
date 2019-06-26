import {axiosWithAuth} from '../utility\/axiosWithAuth'

export const CREATE_PARTY_START = "CREATE_PARTY";
export const CREATE_PARTY_SUCCESS = "CREATE_PARTY_SUCCESS";
export const CREATE_PARTY_FAILED = "CREATE_PARTY_FAILED";

export const createParty = partyInfo => dispatch => {
  console.log('creating party')
  dispatch({ type: CREATE_PARTY_START });
  //when this is triggered possibly go to a form or modal pop out were user can put in party information
  //make axios post request to server to add that party to databasegit
  axiosWithAuth().post('/party', partyInfo)
  .then(res => console.log(res))
  .catch(err => console.log(err))
  dispatch({type: CREATE_PARTY_SUCCESS}) //if axios request is successful
  dispatch({type: CREATE_PARTY_FAILED}) //if error
};

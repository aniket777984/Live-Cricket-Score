import axios from "axios"

const API_KEY = "17bb199f-505d-4a65-ae25-59b3ecb3a1da";

const getMatches = () => {
    
 return axios.get(`https://api.cricapi.com/v1/series_info?apikey=${API_KEY}&offset=0&id=47b54677-34de-4378-9019-154e82b9cc1a`);

};

//get the score of the cuurent match

const getMatchDetail = (id) => {

  return axios.get(`https://api.cricapi.com/v1/match_info?apikey=${API_KEY}&offset=0&id=${id}`);
};

export {getMatches, getMatchDetail}
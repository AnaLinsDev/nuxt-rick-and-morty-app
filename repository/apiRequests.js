const axios = require('axios');

const url = 'https://rickandmortyapi.com/api'

export async function getListAllEpisodes() {
  try {

    const response = await axios.get(url + `/episode?page=${1}`);
    return response;

  } catch (error) {
    console.error(error);
  }
}

const axios = require('axios');

const url = 'https://rickandmortyapi.com/api'


export async function getEpisodeById(id) {
  try {
    const response = await axios.get(url + `/episode/${id}`);
    return response;
    
  } catch (error) {
    console.error(error);
  }
}


export async function getListAllEpisodes() {
  try {
    let listAll = []
    let response = ''

    for (var i = 1; i < 4; i++) {
      response = await axios.get(url + `/episode?page=${i}`);
      listAll.push(...response.data.results)
   }

    return listAll;

  } catch (error) {
    console.error(error);
  }
}



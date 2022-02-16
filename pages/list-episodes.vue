<template>
    <div>
      <h1>List of Episodes</h1>
        <v-data-table
          :headers="headers"
          :items="listEpisodes"
          :items-per-page="5"
          class="elevation-1"
        ></v-data-table>  
    </div>
</template>

<script>

import {getListAllEpisodes} from '../repository/apiRequests'

export default {
  data(){
    return {
       headers: [
          { text: 'Title', value: 'name', align: 'start' },
          { text: 'Air Date', value: 'air_date' },
          { text: 'Episode', value: 'episode' },

        ],
      listEpisodes : []
    }
  },
  beforeMount(){
        getListAllEpisodes()
        .then(resp => this.listEpisodes = resp.data.results)
        .catch(error => alert(error))
  }
}
</script>

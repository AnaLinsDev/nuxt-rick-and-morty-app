<template>
    <div>
      <h1>List of Episodes</h1>
        <v-data-table
          @dblclick:row="goToEpisodePage"
          item-key="id"
          :headers="headers"
          :items="listEpisodes"
          :items-per-page="10"
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
      listEpisodes : [],

    }
  },
  methods: {
    goToEpisodePage(event, {item}) {
      console.log(item.id)
      this.$router.push(`/episodes/${item.id}`)
      }
  },
  beforeMount(){
        getListAllEpisodes()
        .then(resp => this.listEpisodes = resp)
        .catch(error => alert(error))
  }
}
</script>

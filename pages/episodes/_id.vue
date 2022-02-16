<template>
  <div>

    <h1>Episode {{episodeName}} - {{episodeNumber}} </h1>
    <hr><br><br>
    <h2>Air Date: {{episodeAirDate}}</h2><br><br>
    <h1>Characters List:</h1><br><br>

    <div class="gridContainer">
      <div 
      v-for="item in episodeCharactersList"
      :key="item">
      <CharacterCard :url=item  />
      </div>
    </div>

  </div>
</template>

<script>

import {getEpisodeById} from '../../repository/apiRequests'

export default {

  components: {
      dirs: [
        '~/components'
        ]
      },
   
   data(){
    return {
      idPage : this.$route.params.id,
      episodeName : '',
      episodeAirDate : '',
      episodeNumber : '',
      episodeCharactersList : [],

      alignments: [
        'start',
        'center',
        'end',
      ],

    }
    },

   beforeMount(){
        getEpisodeById(this.idPage)
        .then(resp => 

          {
          this.episodeName = resp.data.name,
          this.episodeAirDate = resp.data.air_date,
          this.episodeNumber = resp.data.episode,
          this.episodeCharactersList.push(...resp.data.characters)
          }

        )
        .catch(error => alert(error))
   }
}
</script>

<style>
.gridContainer{
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 15px;
}
</style>
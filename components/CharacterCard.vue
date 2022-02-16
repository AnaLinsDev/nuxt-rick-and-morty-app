<template>
  <v-card
    class="mx-auto"
    max-width="260"
  >
    <v-img
      class="white--text align-end"
      height="260px"
      gradient="to top, rgba(10,10,10,0.6), rgba(240,240,240,.2)"
      contain
      :src="getImage()"
    >
      <v-card-title>{{name}}</v-card-title>
    </v-img>

    <v-card-subtitle class="pb-0">
      {{status}}
    </v-card-subtitle>

    <v-card-text class="text--primary">
      <div>Species: {{species}}</div>
      <div>Origin: {{origin}}</div>
    </v-card-text>

  </v-card>
</template>

<script>

import {getCharacter} from '../repository/apiRequests'

export default {
  props: ['url'],

  data(){
    return {
      name : '',
      status: '',
      species:  '',
      origin: '',
      imageURL: '',
    }
  },

     beforeMount(){
        getCharacter(this.url)
        .then(resp => 

          {
            this.name = resp.data.name,
            this.status = resp.data.status,
            this.species = resp.data.species,
            this.origin = resp.data.origin.name,
            this.imageURL = resp.data.image

          }

        )
        .catch(error => alert(error))
      },

      methods :{
        getImage(){
          return this.imageURL
        }
      },

      metaInfo () {
          return {
            url : this.url
            }
          }

}
</script>

<style>

</style>
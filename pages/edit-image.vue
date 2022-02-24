<template>
  <div>
    <h1>Maximo : 400 | Mínimo : 0</h1>
    <h2> Tamanho Atual : {{imgWidth}}</h2>
    <img 
    src="../static/img-menu.png" 
    v-bind:width="imgWidth" 
    class="edit-image"
    alt="edit image">
    <div>
      <v-btn v-on:click="plus"   :class="{'cor-1': true}" > + 100px </v-btn>
      <v-btn v-on:click="minus" class="cor-2" > - 100px </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      imgWidth : 200
    }
  },
  methods: {
    plus(){
      if (this.imgWidth < 400){
      this.imgWidth+=100
      }
    },
    minus(){
      if (this.imgWidth > 0){
      this.imgWidth-=100
      }
    }
  }

}
</script>

<style>
.cor-1{
  background-color: rgb(125, 209, 0) !important;
  color: black !important;
}
.cor-2{
  background-color: rgb(209, 0, 0) !important;
}
</style>

<template>
<div>
  <h1> Page to practice Events </h1>

    <form class="form-event">

      <h2>v-on:keyup</h2>
      <input 
      type="text" 
      v-model="name"
      placeholder="Name" 
      v-on:keyup="getName($event)">
      
      <hr>
      
      <h2>v-on:keydown.enter</h2>
      <input 
      type="text" 
      v-model="email"
      placeholder="Email" 
      v-on:keydown.enter="getEmail($event)">

    </form>

    <div>
      <h1> Name Writed: {{name_writed}} - ( {{name}} )</h1>
      <h1> Email Writed: {{email_writed}} - ( {{email}} )</h1>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
       name : '',
       email: '',
       name_writed: false,
       email_writed: false,
    }
  },
  methods :{
    getName(e){
      if(e.target.value.length == 0){
        this.name_writed = false
        return
      }
      this.name_writed = true
    },

    getEmail(e){
      if(e.target.value.length == 0){
        this.email_writed = false
        return
      }
      this.email_writed = true
      
    },
  }
}
</script>

<style>
.form-event input{
  background-color: whitesmoke;
  padding: 20px;
  margin-bottom: 40px;
}
</style>
<template>
  <div class="todo-app">
    <h1 class="msg-todo">{{ msg }}</h1>
    <div
      v-for="todo in todos"
      :key="todo.id"
      data-test="todo"
      :class="[todo.completed ? 'done' : 'todo']"
    >
      <p>   
        {{ todo.text }}
        (( {{ todo.id }} ))
      </p> 

      <input
        class="checkbox"
        type="checkbox"
        v-model="todo.completed"
        data-test="todo-checkbox"
      />

    </div>

    <form data-test="form" @submit.prevent="createTodo" class="form">
      <input data-test="new-todo" v-model="newTodo" placeholder="New Todo" class="form-input"/>
    </form>

  </div>
</template>

<script>
export default {
  name: 'TodoApp',

  data() {
    return {
      msg: 'TODO APP',
      newTodo: '',
      idAux : 0,
      todos: []
    }
  },

  methods: {
    createTodo() {
      this.todos.push({
        id: this.idAux++,
        text: this.newTodo,
        completed: false
      })
    }
  }
}
</script>

<style>
  .todo-app{
    background-color: whitesmoke;
    color: black;
    width: 50vw;
    text-align: center;
    border-radius: 20px;
    margin:auto;
  }
  .todo-app .form-input{
    cursor: pointer;
    padding: 12px 20px;
    margin: 8px 0;
    border: 1px solid rgb(90, 90, 90);
    border-radius: 4px;
    box-sizing: border-box;
  }
  .todo-app .done{
    background-color: rgb(62, 214, 62);
  }
  .todo-app .todo{
    background-color: rgb(218, 218, 218);
  }
  .todo-app .todo,.todo-app .done{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 12px 20px;
  }
  .todo-app .checkbox{
      width: 20px;
      height: 20px;
  }
  .todo-app .todo p ,.todo-app .done p {
    margin-bottom: 0;
    margin-right: 15px;
  }
  
</style>
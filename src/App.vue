<template>
  <div id="app">
<!--    <img alt="Vue logo" src="./assets/logo.png">-->
    <TodoList/>
    <div class="create-task">
      <button class="create-task__btn">+</button>
    </div>
  </div>
</template>

<script>
import TodoList from './components/TodoList'

export default {
  name: 'app',
  components: {
    TodoList
  }
}
</script>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  .create-task {
    margin-top: 40px;
    &__btn {
      font-size: 2rem;
      border-radius: 10px;
      padding: 10px 15px;
      padding-top: 5px;
      outline: none;
      transition: background .2s;
      &:hover {
        box-shadow: 1px 2px 5px 1px rgba(0, 0, 0, 0.3);
        transition: box-shadow .1s linear;
      }
    }
  }
</style>

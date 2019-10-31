<template>
  <div id="app">
    <transition mode="out-in" name="fade">
<!--    <img alt="Vue logo" src="./assets/logo.png">-->
    <TodoList/>
  </transition>
    <div class="create-task">
      <button class="create-task__btn" @click="createTask">+</button>
    </div>
    <CreateTaskModal/>
  </div>
</template>

<script>
import TodoList from './components/TodoList'
import CreateTaskModal from './components/CreateTaskModal'

export default {
  name: 'app',
  data: () => ({
  }),
  components: { TodoList, CreateTaskModal },
  methods: {
    createTask () {
      this.$root.$emit('openCreateModal', true)
    }
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
      padding: 8px 15px;
      /*padding-top: 5px;*/
      outline: none;
      transition: box-shadow .2s;
      background-color: #f6f6f6;
      &:hover {
        box-shadow: 1px 2px 5px 1px rgba(0, 0, 0, 0.3);
        transition: box-shadow .1s linear;
      }
    }
  }
</style>

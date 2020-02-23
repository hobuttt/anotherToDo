<template>
  <div class="modal-mask show-task-modal" v-if="showModal">
    <div class="modal-wrapper">
      <div class="modal-container">
        <div class="modal-header">
          <h2>Просмотр задачи: {{task.title}}</h2>
          <button class="modal-close-button close-show-task-btn" @click="showModal = false">
            X
          </button>
        </div>

        <div class="modal-body modal-show-body">
          <h4>Описание:</h4>
          <div style="display: flex">
            <div class="modal-show-body__image"><img :src="`${task.img}`" alt="" style="width: 100%"></div>
            <div class="modal-show-body__description">{{task.description}}</div>
          </div>
          <div>
            <button class="check-task-btn done-task-btn" @click="checkTask" v-if="!task.done">Выполненно</button>
            <button class="check-task-btn undone-task-btn" @click="checkTask" v-else>Не выполненно</button>
          </div>

        </div>
        <div class="modal-body modal-body-task">

        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ShowTaskModal',
  data: () => ({
    showModal: false,
    task: {}
  }),
  mounted () {
    this.$root.$on('openShowModal', this.openModal)
  },
  methods: {
    openModal (task) {
      this.showModal = true
      this.task = task
    },
    checkTask () {
      this.task.done = !this.task.done
      this.$root.$emit('editTask', this.task)
      this.showModal = false
    }
  }
}
</script>
<style scoped lang="scss">
  .modal-mask {
    position: fixed;
    z-index: 99;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: opacity .3s ease;
  }

  .modal-wrapper {
    display: table-cell;
    vertical-align: middle;
  }

  .modal-container {
    width: 800px;
    margin: 0 auto;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    transition: all .3s ease;
    font-family: Helvetica, Arial, sans-serif;
  }

  .modal-enter {
    opacity: 0;
  }

  .modal-leave-active {
    opacity: 0;
  }

  .modal-enter .modal-container,
  .modal-leave-active .modal-container {
    transform: scale(1.1);
  }
  .modal-header {
    position: relative;
    .modal-close-button {
      position: absolute;
      top: -25px;
      right: -15px;
      height: 25px;
      border-radius: 2px;
      background-color: #f1f1f1;
      transition: all .2s ease;
      &:hover {
        box-shadow: 1px 2px 5px 1px rgba(0, 0, 0, 0.3);
      }
    }
  }
  .modal-body-form {
    flex-direction: column;
  }
  .modal-body{
    display: flex;
    .check-task-btn {
      margin: 20px auto;
      width: 120px;
      height: 30px;
      border-radius: 2px;
      transition: all .2s ease;
      &:hover {
        box-shadow: 1px 2px 5px 1px rgba(0, 0, 0, 0.3);
      }
    }
    .done-task-btn {
      background-color: #a3f182;
    }
    .undone-task-btn {
      background-color: #eee;
    }
  }
  .modal-show-body {
    flex-direction: column;
    &__description {
      width: 80%;
      padding-top: 10px;
      padding-left: 20px;
      text-align: left
    }
    &__image {
      width: 20%;
    }
  }

</style>

<template>
  <div class="modal-mask" v-if="showModal">
    <div class="modal-wrapper">
      <div class="modal-container">

        <div class="modal-header">
          <h2>Создание задачи</h2>
          <button class="modal-close-button" @click="showModal = false">
            X
          </button>
        </div>

        <div class="modal-body">
          <input type="text" name="title" class="modal-body__text-input" v-model="task.title">
          <input type="text" name="description" class="modal-body__text-input" v-model="task.description">
          <input type="file" name="description" class="modal-body__file-input" @change="setImage($event.target.files)">
          <button @click="addTask" class="add-task-btn">Создать</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CreateTaskModal',
  data: () => ({
    showModal: false,
    task: {}
  }),
  mounted () {
    this.$root.$on('openCreateModal', this.createModal)
  },
  methods: {
    createModal (open) {
      this.showModal = open
    },
    setImage (file) {
      const image = file[0]
      const reader = new FileReader()
      reader.readAsDataURL(image)
      reader.onloadend = () => {
        // let block = reader.result.split(';')
        // this.model.image = block[1].split(',')[1]
        this.task.img = reader.result
      }
    },
    addTask () {
      this.task.done = false
      console.log(this.task)
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
    width: 500px;
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
  .modal-body{
    display: flex;
    flex-direction: column;
    &__text-input {
      padding-left: 10px;
      width: 80%;
      height: 30px;
      margin: 0 auto;
      margin-top: 20px;
    }
    &__file-input {
      margin-top: 20px;
      margin-left: calc(10% - 8px);
    }
    .add-task-btn {
      margin: 20px auto;
      width: 120px;
      height: 30px;
      border-radius: 2px;
      background-color: #f1f1f1;
      transition: all .2s ease;
      &:hover {
        box-shadow: 1px 2px 5px 1px rgba(0, 0, 0, 0.3);
      }
    }
  }
</style>

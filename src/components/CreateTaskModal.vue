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

        <div class="modal-body modal-body-form">
          <input type="text" name="title" class="modal-body__text-input" v-model="task.title">
          <textarea
            type="text"
            name="description"
            class="modal-body__text-input modal-body__texta"
            v-model="task.description"/>
          <input type="file" name="description" class="modal-body__file-input" @change="setImage($event.target.files)">
          <button @click="addTask" class="add-task-btn">Сохранить</button>
        </div>
        <div class="modal-body modal-body-task">

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
    task: {},
    isEdit: false
  }),
  mounted () {
    this.$root.$on('openCreateModal', this.openModal)
    this.$root.$on('openEditModal', this.openEditModal)
  },
  methods: {
    openModal (open) {
      this.task = {}
      this.showModal = open
    },
    openEditModal (task) {
      this.task = task
      this.isEdit = true
      this.showModal = true
    },
    setImage (file) {
      const image = file[0]
      const reader = new FileReader()
      reader.readAsDataURL(image)
      reader.onloadend = () => {
        this.task.img = reader.result
      }
    },
    addTask () {
      if (this.isEdit) {
        this.$root.$emit('editTask', this.task)
        this.showModal = false
        this.isEdit = false
      } else {
        this.task.done = false
        this.task.id = Math.random(1, 100)
        this.$root.$emit('createTask', this.task)
        this.task = {}
        this.showModal = false
      }
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
    width: 250px;
    margin: 0 auto;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    transition: all .3s ease;
    font-family: Helvetica, Arial, sans-serif;
    @media (min-width: 375px) {
      width: 300px;
    }
    @media (min-width: 600px) {
      width: 500px;
    }
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
    &__text-input {
      padding-left: 10px;
      width: 80%;
      height: 30px;
      margin: 0 auto;
      margin-top: 20px;
    }
    &__texta {
      /*height: 60px;*/
      max-width: 80%;
      min-width: 40%;
      max-height: 400px;
      min-height: 60px;
      transition: all .1s ease;
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

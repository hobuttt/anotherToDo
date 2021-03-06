<template>
  <div>
    <h1>{{ pageTitle }}</h1>
    <section class="list">
      <article
        v-for="(item, index) in listItems"
        class="list-item"
        :class="{'green-yello': item.done}"
        :key="index"
        @dblclick="showTask(item)"
      >
        <div class="list-item__icons">
          <PencilIcon class="pencil" @click="openEditModal(item)"/>
          <DeleteIcon class="delete" @click="deleteTask(item)"/>
        </div>
        <div class="list-item__image">
          <img :src="item.img" alt="">
        </div>
        <div class="list-item__sidebox">
          <div class="list-item__title">
            <p>{{item.title}}</p>
          </div>
          <div class="list-item__description">
            <p>{{item.description}}</p>
          </div>
        </div>
      </article>
    </section>
  </div>
</template>

<script>
import PencilIcon from 'vue-material-design-icons/Pencil.vue'
import DeleteIcon from 'vue-material-design-icons/Delete.vue'

export default {
  name: 'TodoList',
  components: { PencilIcon, DeleteIcon },
  data () {
    return {
      pageTitle: 'My ToDo list',
      listItems: []
    }
  },
  mounted () {
    this.$root.$on('createTask', this.createTask)
    this.$root.$on('editTask', this.editTask)
  },
  methods: {
    showTask (task) {
      this.$root.$emit('openShowModal', Object.assign({}, task))
    },
    createTask (task) {
      this.listItems.push(task)
    },
    editTask (editedTask) {
      const task = this.listItems.find(task => task.id === editedTask.id)
      const taskIndex = this.listItems.indexOf(task)
      this.listItems[taskIndex] = editedTask
    },
    deleteTask (task) {
      this.listItems = this.listItems.filter(item => item.id !== task.id)
    },
    openEditModal (task) {
      this.$root.$emit('openEditModal', Object.assign({}, task))
    }
  }
}
</script>

<style scoped lang="scss">
  .list {
    width: 60%;
    margin: 0 auto;
    margin-top: 20px;
  }
  .list-item{
    position: relative;
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    padding: 15px 20px;
    border: 2px solid #ccc;
    box-shadow: 1px 3px 7px 1px rgba(0, 0, 0, 0.3);
    transition: box-shadow .2s linear;
    cursor: pointer;
    align-items: center;
    @media (min-width: 768px) {
      height: 100px;
      flex-direction: row;
    }
    &:hover {
      box-shadow: 1px 3px 7px 1px rgba(0, 0, 0, 0.5);
    }
    &__icons {
      position: absolute;
      display: flex;
      top: 10px;
      right: 10px;
      .pencil {
        font-size: 20px;
        margin-right: 7px;
      }
      .delete {
        font-size: 20px;
        color:red
      }
    }
    &__sidebox {
      width: 100%;
      display: flex;
      flex-direction: column;
      @media (min-width: 768px) {
        width: 70%;
      }
      @media (min-width: 1200px) {
        width: 90%;
      }
    }
    &__image {
      width: 80%;
      max-height: 100px;
      @media (min-width: 768px) {
        width: 30%;
        height: 100%;
      }
      @media (min-width: 1200px) {
        width: 10%;
      }
      img {
        height: 100%;
        width: 50%;
        overflow: hidden;
        object-fit: cover;
        @media (min-width: 768px) {
          width: 100%;
        }
      }
    }
    &__title {
      width: 100%;
      text-align: center;
      font-weight: 600;
      font-size: 18px;
    }
    &__description {
      text-align: left;
      p {
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        padding: 0 20px;
      }
    }
  }
  .green-yello {
    background-color: #e8ffe2;
  }
</style>

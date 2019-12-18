<template>
  <div>
    <h1>{{ pageTitle }}</h1>
    <section class="list">
      <article
        v-for="(item, index) in listItems"
        class="list-item"
        :class="{'green-yello': item.done}"
        :key="index"
        @dblclick="openTask(item)"
      >
        <div class="list-item__icons">
          <PencilIcon class="pencil" @click="openEditModal(item)"/>
          <DeleteIcon class="delete" @click="deleteTask(item)"/>

        </div>
        <div class="list-item__image">
          <img :src="item.img" alt="">
        </div>
        <div class="sidebox">
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
    openTask (task) {
      console.log(task)
    },
    createTask (task) {
      this.listItems.push(task)
    },
    editTask (editedTask) {
      const task = this.listItems.find(task => task.id === editedTask.id)
      const taskIndex = this.listItems.indexOf(task)
      console.log(editedTask)
      console.log(this.listItems)
      this.listItems[taskIndex] = editedTask
      console.log(this.listItems)
    },
    deleteTask (task) {
      this.listItems = this.listItems.filter(item => item.id !== task.id)
    },
    openEditModal (task) {
      this.$root.$emit('openEditModal', task)
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
    height: 100px;
    margin-top: 30px;
    padding: 15px 20px;
    border: 2px solid #ccc;
    box-shadow: 1px 3px 7px 1px rgba(0, 0, 0, 0.3);
    transition: box-shadow .2s linear;
    cursor: pointer;
    align-items: center;
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
    .sidebox {
      width: 90%;
      display: flex;
      flex-direction: column;
    }
    &__image {
      width: 10%;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
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

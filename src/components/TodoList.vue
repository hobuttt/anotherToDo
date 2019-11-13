<template>
  <div>
    <h1>{{ pageTitle }}</h1>
    <section class="list">
      <article
        v-for="(item, index) in listItems"
        class="list-item"
        :class="{'green-yello': item.done}"
        :key="index"
        @click="openTask(item)"
      >
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
export default {
  name: 'TodoList',
  data () {
    return {
      pageTitle: 'My ToDo list',
      listItems: []
    }
  },
  mounted () {
    this.$root.$on('pushTask', this.pushTask)
  },
  methods: {
    openTask (task) {
      console.log(task)
    },
    pushTask (task) {
      this.listItems.push(task)
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

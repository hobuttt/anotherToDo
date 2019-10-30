<template>
  <div>
    <h1>{{ pageTitle }}</h1>
    <section class="list">
      <article
        v-for="(item, index) in listItems"
        class="list-item"
        :class="{'green-yello': item.done}"
        :key="index"
        @click="openTask"
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
      listItems: [
        {
          title: 'Task 1',
          description: 'Do Just work is wery good and simple Do Just work is wery good and simple Do Just work is wery good and simple Do Just work is wery good and simple Do Just work is wery good and simpleDo Just work is wery good and simpleDo Just work is wery ',
          img: 'https://vignette.wikia.nocookie.net/supermarioglitchy4/images/a/a5/FlyingSpaghettiMonster.png/revision/latest?cb=20190901022219',
          done: false
        },
        {
          title: 'Task 2',
          description: 'Just Do',
          img: 'https://vignette.wikia.nocookie.net/supermarioglitchy4/images/a/a5/FlyingSpaghettiMonster.png/revision/latest?cb=20190901022219',
          done: false
        }
      ]
    }
  },
  methods: {
    openTask () {
      console.log(11)
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
    margin-top: 30px;
    padding: 15px 20px;
    border: 2px solid #ccc;
    box-shadow: 1px 3px 7px 1px rgba(0, 0, 0, 0.3);
    transition: box-shadow .2s linear;
    cursor: pointer;
    align-items: center;
    &:hover {
      box-shadow: 1px 3px 7px 1px rgba(0, 0, 0, 0.5);
      transition: box-shadow .1s linear;
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

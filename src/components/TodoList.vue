<template>
  <div>
    <h1>{{ pageTitle }}</h1>
    <section class="list">
      <article class="list-item"
         v-for="(item, index) in listItems"
         :key="index"
      >
        <div class="list-item__image">
          <img :src="item.img" alt="">
        </div>
        <div class="sidebox">
          <div class="list-item__title">
            <span>{{item.title}}</span>
          </div>
          <div class="list-item__description">
            <span>{{item.description}}</span>
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
          title: '1',
          description: 'Do Just',
          img: 'https://vignette.wikia.nocookie.net/supermarioglitchy4/images/a/a5/FlyingSpaghettiMonster.png/revision/latest?cb=20190901022219',
          done: false
        },
        {
          title: '2',
          description: 'Just Do',
          img: 'https://vignette.wikia.nocookie.net/supermarioglitchy4/images/a/a5/FlyingSpaghettiMonster.png/revision/latest?cb=20190901022219',
          done: false
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
  .list {
    width: 50%;
    margin: 0 auto;
  }
  .list-item{
    display: flex;
    height: 70px;
    margin-top: 40px;
    .sidebox {
      padding-left: 40px;
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
    }
  }
</style>

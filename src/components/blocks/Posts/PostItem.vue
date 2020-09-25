<template>
  <router-link :to="'/posts/' + item.id" class="post-item">
    <img src="https://via.placeholder.com/200x100" alt="Post Placeholder">
    <div class="post-item-body">
      <h2>POST ITEM {{ item.title }}</h2>
      <p>
        {{ item.description }}
        Відгуків ще не було опубліковано. Будь ласка, не соромтеся поділитися своєю думкою та написати перший відгук!
      </p>
    </div>
  </router-link>
</template>

<script>

export default {
  name: 'post-item',
  props: ['item'],
  created() {
    console.log('POST Item Block');
  }
}
</script>

<style lang="stylus" scoped>
  .post-item
    margin: 5px
    box-sizing: border-box
    border: 1px solid #304f5d
    border-radius: 5px
    overflow: hidden
    transition: 100ms
    background-color: #304f5d8c

    &:hover
      transform scale(1.01)

    img
      width: 100%

    h2
      font-size: 15px
      font-weight: 300
      margin: 0
      color: #ccc

    p
      font-size 12px
      margin: 5px 0
      color: #ccccccbd

    &-body
      padding 5px

</style>

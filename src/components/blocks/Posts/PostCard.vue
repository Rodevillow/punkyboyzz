<template>
  <div class="post-wrapper">
    POST CARD
  </div>
</template>

<script>

export default {
  name: 'post-card',
  props: ['item'],
  created() {
    console.log('POST Card Block');
  }
}
</script>

<style lang="scss">
  .post-wrapper {
    padding: 3px;
    background-color: red;
  }
</style>

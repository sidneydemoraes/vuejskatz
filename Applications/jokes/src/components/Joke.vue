<template lang="pug">
.col-md-6
  .joke-card
    .card-block
      button.close(@click="removeJoke(index)")
        span &times;
      p
        u {{joke.setup}}
      p
        em {{joke.punchline}}
</template>

<script>
import {mapActions} from 'vuex'

export default {
  props: ['joke','index'],
  methods: mapActions([
    'removeJoke'
  ])
}
</script>

<style lang="scss">
.joke-card {
  border: 2px solid #2C3350;
  border-radius: 2px;
  padding: 5px;
  margin: 5px;
}
</style>

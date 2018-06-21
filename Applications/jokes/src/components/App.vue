<template lang="pug">
#app 
  h3 Got Jokes?
  button.btn.btn-primary(@click="initJokes") Add Ten Random Jokes
  button.btn.btn-primary(@click="addJoke") Add New Joke
  br
  span(v-for="type in availableTypes")
    input(type="checkbox", :value="type",v-model="checkedTypes", checked)
    label {{type}} &nbsp;
  br
  .col-md-12
    Joke(v-for="(joke, index) in $store.state.jokes", :joke="joke", :index="index", v-show="checkedTypes.includes(joke.type)")
</template>

<script>
import { mapActions } from 'vuex'
import Joke from './Joke.vue'

export default {
  data() {
    return {
      availableTypes: ['general', 'knock-knock', 'programming'],
      checkedTypes: ['general', 'knock-knock', 'programming']
    }
  },
  methods: mapActions([
    'initJokes', 'addJoke'
  ]),
  components: {
    Joke
  }
}
</script>

<style lang="scss">
@import '../scss/_base.scss';
.btn {
  margin: 5px;
}
</style>

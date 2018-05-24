<template>
<div id="app">
  <h3>{{title}}</h3>
  <div class="col-md-12">
    <Character 
      v-for="id in initial_ids"
      v-bind:id="id" 
    />
  </div>
</div>
</template>

<script>
import Character from './components/Character.vue'

export default {
  name: 'app',
  data() {
    return {
      title: 'Generate your Team',
      initial_ids: [1, 13, 14, 4]
    }
  },
  methods: {
  },
  components: {
    Character
  }
}
</script>

<style lang="scss">
body {
  background: #263238;

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: white;
    margin-top: 60px;
  }
}
</style>

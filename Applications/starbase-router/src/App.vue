<template lang="pug">
#app
  h3 Starbase Router
  h4
    router-link.link(to="/data/people") Meet the Characters
    |  | 
    router-link.link(to="/data/planets") Explore the Planets
  router-view
</template>

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

    .link,
    .link:hover,
    .link:visited,
    .link:active {
      color: #4FC08D;
    }

  }
}
</style>

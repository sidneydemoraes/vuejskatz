<template lang="pug">
.col-md-4(@click="switchItem")
  .item-card
    .card-block
      h4.card-title {{givenItem.name}}
      div(v-for="(value, key, index) in givenItem")
        div(v-if="index < 7")
          strong {{key}}: 
          | {{value}}
</template>

<script>
export default {
  props: ['item', 'type'],
  data() {
    return {
      givenItem: {}
    }
  },
  methods: {
    switchItem() {
      let random_id = Math.ceil(Math.random() * 63)
      fetch(`http://swapi.co/api/${this.type}/${random_id}`, {
        method: 'GET'
      })
      .then(response => response.json())
      .then(json => this.givenItem = json)
    }
  },
  created() {
    this.givenItem = this.item
  }
}
</script>

<style lang="scss">
.item-card {
  border: 2px solid #4FC08D;
  border-radius: 4px;
  padding: 5px;
  padding-bottom: 10px;
  cursor: pointer;
}
</style>

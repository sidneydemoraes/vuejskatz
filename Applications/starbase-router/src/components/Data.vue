<template lang="pug">
.col-md-12
  Item(
    v-for="(item,index) in items"
    :item="item"
    :type="type"
  )
</template>

<script>
import Item from './Item.vue'
export default {
  data() {
    return {
      type: this.$route.params.type,
      items: []
    }
  },
  watch: {
    '$route': 'fetchItems'
  },
  methods: {
    fetchItems() {
      this.type = this.$route.params.type
      this.items = []
      let initial_ids = [1, 13, 14]

      for (let idx in initial_ids) {
        let id = initial_ids[idx]
        fetch(`http://swapi.co/api/${this.type}/${id}`, {
          method: 'GET'
        })
        .then(response => response.json())
        .then(json => this.items.push(json))
      }
    }
  },
  created() {
    this.fetchItems()
  },
  components: {
    Item
  }
}
</script>

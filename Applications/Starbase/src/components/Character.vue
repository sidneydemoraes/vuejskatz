<template lang="pug">
.col-md-2(@click="switchCharacter")
  .character-card
    .card-block
      h.card-title {{character.name}}
      p.card-text Height: {{character.height}}
      p.card-text Mass: {{character.mass}}kg
      .card-text Hair Color: {{character.hair_color}}
      p.card-text Eye Color: {{character.eye_color}}
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      character: ''
    }
  },
  methods: {
    fetchCharacter(id) {
      fetch(`http://swapi.co/api/people/${id}`, {
        method: 'GET'
      })
      .then(response => response.json())
      .then(json => this.character = json)
    },
    switchCharacter() {
      let random_id = Math.ceil(Math.random() * 83)
      this.fetchCharacter(random_id)
    }
  },
  created() {
    this.fetchCharacter(this.id)
  }
}
</script>

<style lang="scss">
.character-card {
  border: 2px solid green;
  border-radius: 4px;
  cursor: pointer;
}
</style>

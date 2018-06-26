<template lang="pug">
div
  h4 Add an Event
    input.show-form(type='checkbox', v-model='showForm')
  .form(v-if='showForm')
    .form-group
      label Title
      input.form-control(type='text', v-model='event.title')
    .form-group
      label Description
      input.form-control(type='text', v-model='event.description')
    .form-group
      label Date
      input.form-control(type='date', v-model='event.date')
    .form-group
      label Location
      input.form-control(type='text', v-model='event.location')
    button.btn.btn-primary(@click='addEvent') Submit
</template>

<script>
import { eventsRef } from '../firebase'

export default {
  data() {
    return {
      event: {
        title: '',
        description: '',
        date: '',
        location: '',
        email: ''
      },
      showForm: false
    }
  },
  methods: {
    addEvent() {
      this.event.email = this.$store.state.user.email
      eventsRef.push(this.event)
    }
  }
}
</script>

<style lang="scss">
.show-form {
  margin: 0 15px;
}
</style>

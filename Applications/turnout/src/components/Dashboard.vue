<template lang="pug">
div
  h3 Events Dashboard
  button.btn.btn-danger.btn-sm.signout-btn(@click='signOut') Sign Out
  hr
  AddEvent
  hr
  .col-md-12
    EventItem(v-for='(event_item, index) in this.$store.state.events', :event='event_item', key='index')
</template>

<script>
import { firebaseApp, eventsRef } from '../firebase'
import AddEvent from './AddEvent.vue'
import EventItem from './EventItem.vue'

export default {
  methods: {
    signOut() {
      this.$store.dispatch('signOut')
      firebaseApp.auth().signOut()
    }
  },
  components: {
    AddEvent, EventItem
  },
  mounted() {
    eventsRef.on('value', snap => {
      let events = []
      snap.forEach(event => {
        events.push(event.val())
      })
      console.log('events', events)
      this.$store.dispatch('setEvents', events)
    })
  }
}
</script>

<style lang="scss">
.signout-btn {
  position: absolute;
  text-align: right;
  top: 60px;
  right: 30%;
}
</style>

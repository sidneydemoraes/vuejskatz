<template lang="pug">
div
  h3 Events Dashboard
  button.btn.btn-danger.btn-sm.signout-btn(@click='signOut') Sign Out
  | {{ $store.state }}
</template>

<script>
import { firebaseApp } from '../firebase'

export default {
  methods: {
    signOut() {
      this.$store.dispatch('signOut')
      firebaseApp.auth().signOut()
    }
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

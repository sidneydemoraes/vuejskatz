<template lang="pug">
.form-inline
  h3 Sign in
  .form-group
    input.form-control(type='text', placeholder='email', v-model='email')
    input.form-control(type='password', placeholder='password', v-model='password')
    button.btn.btn-primary(@click='signIn') Sign In
  br
  p {{ error.message }}
  br
  router-link(to='/signup') Not a User? Sign Up.
</template>

<script>
import { firebaseApp } from '../firebase'

export default {
  data() {
    return {
      email: '',
      password: '',
      error: {
        message: ''
      }
    }
  },
  methods: {
    signIn () {
      firebaseApp.auth().signInWithEmailAndPassword(this.email, this.password)
      .catch(error => {
        this.error = error
      })
    }
  }
}
</script>

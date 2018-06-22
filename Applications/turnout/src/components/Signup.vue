<template lang="pug">
.form-inline
  h3 Sign Up
  .form-group
    input.form-control(type='text', placeholder='email', v-model='email')
    input.form-control(type='password', placeholder='password', v-model='password')
    button.btn.btn-primary(@click='signUp') Sign Up
  br
  p {{ error.message }}
  br
  router-link(to='/signin') Already a User? Sign In.
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
   signUp () {
     firebaseApp.auth().createUserWithEmailAndPassword(this.email, this.password)
     .catch(error => {
       this.error = error
     })
   }
 }
}
</script>

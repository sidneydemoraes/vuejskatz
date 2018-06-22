import Firebase from 'firebase'

const config = {
  apiKey: "AIzaSyDuI6J9q8jbvawR5t7haXjRzUvkjr_iL-o",
  authDomain: "turnout-f2762.firebaseapp.com",
  databaseURL: "https://turnout-f2762.firebaseio.com",
  projectId: "turnout-f2762",
  storageBucket: "turnout-f2762.appspot.com",
  messagingSenderId: "1048720262485"
};

export const firebaseApp = Firebase.initializeApp(config)
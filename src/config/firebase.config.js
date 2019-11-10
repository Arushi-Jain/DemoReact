
import firebase from 'firebase';
// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: 'AIzaSyCqSIZwJ2Gb-iM2DhZA_aUujR603rJivXI',
    // authDomain: '### FIREBASE AUTH DOMAIN ###',
    projectId: 'todoreact-606fb'
  });
  
  var db = firebase.firestore();
  
  db.collection("buckets").add({
    name:"buck1",
    todos:JSON.stringify([{
       "message":"Feed my Dog",
       "star": true
    }])
})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});

  export default db
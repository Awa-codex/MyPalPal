import firebase from '@firebase/app';
require('firebase/auth');

var firebaseConfig = {
        apiKey: 'AIzaSyDsTV8nriTmQlgi4PvpAOSmQcue_jiaG34',
        authDomain: 'my-pal-pal.firebaseapp.com',
        databaseURL: 'https://my-pal-pal.firebaseio.com',
        projectId: 'my-pal-pal',
        storageBucket: 'my-pal-pal.appspot.com',
        messagingSenderId: '208312777255',
        appId: '1:208312777255:android:dfaa0b7b3d4cb08e226c02',
        measurementId: 'G-measurement-id',
    }
const FirebaseAuth = firebase.initializeApp(firebaseConfig);

export default FirebaseAuth;
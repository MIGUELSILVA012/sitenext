import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyAfJ2kJizqCGuWeRLeIechvdMABkQCzOc4",
    authDomain: "fire-crud-aula.firebaseapp.com",
    projectId: "fire-crud-aula",
    storageBucket: "fire-crud-aula.appspot.com",
    messagingSenderId: "20688493637",
    appId: "1:20688493637:web:6588d01295bbabde25172c"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Get a list of cities from your database
async function getCities(db) {
  const citiesCol = collection(db, 'cities');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  return cityList;
}
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getDatabase, ref, set, get, onValue } from 'firebase/database'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: 'AIzaSyAuIoRIQDFc68FAoPsTSVLyndVvAAM2qTo',
  authDomain: 'codersouth-rtc.firebaseapp.com',
  projectId: 'codersouth-rtc',
  storageBucket: 'codersouth-rtc.appspot.com',
  messagingSenderId: '208542950495',
  appId: '1:208542950495:web:c674aeb1944e23cb3967ea',
  measurementId: 'G-926R3L32MN',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getDatabase(app)

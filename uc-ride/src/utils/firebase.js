import { initializeApp } from 'firebase/app';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyAjM1lnHqxsAlDuSYEnDvllsvkIf8Ha_a8',
    authDomain: 'uc-ride-f8656.firebaseapp.com',
    projectId: 'uc-ride-f8656',
    storageBucket: 'uc-ride-f8656.appspot.com',
    messagingSenderId: '336147551690',
    appId: '1:336147551690:web:b7b5753689a0c1813deb33',
    measurementId: 'G-DWKC7192X2'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
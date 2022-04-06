import {initializeApp} from "firebase/app"
import {getAuth} from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyCnNbaQeri2dm-3G04MJKlXjVedlWz6xQ4",
    authDomain: "auth-development-e654a.firebaseapp.com",
    projectId: "auth-development-e654a",
    storageBucket: "auth-development-e654a.appspot.com",
    messagingSenderId: "207860763545",
    appId:"1:207860763545:web:9b42b43ab14fd0684be108"
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export default app




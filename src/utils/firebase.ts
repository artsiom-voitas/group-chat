// Import the functions you need from the SDKs you need
import { getAnalytics } from 'firebase/analytics'
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: 'AIzaSyAEwGf_hl1EDm2pnomknHNXL_c3Rc5PYe4',
    authDomain: 'group-chat-2319.firebaseapp.com',
    projectId: 'group-chat-2319',
    storageBucket: 'group-chat-2319.appspot.com',
    messagingSenderId: '771723811105',
    appId: '1:771723811105:web:a1be91144b9ac11fe0c660',
    measurementId: 'G-H18TG95R2E'
}

const app = initializeApp(firebaseConfig)
export const analytics = getAnalytics(app)
export const auth = getAuth(app)
export const db = getFirestore(app)

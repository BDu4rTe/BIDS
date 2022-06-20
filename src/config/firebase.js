import { initializeApp } from "firebase/app";
import {initializeFirestore} from "firebase/firestore"
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAw_f2ubXLyRoa4mIZuAxxnT7v_7t4vI7M",
  authDomain: "bids-e2179.firebaseapp.com",
  projectId: "bids-e2179",
  storageBucket: "bids-e2179.appspot.com",
  messagingSenderId: "927577128714",
  appId: "1:927577128714:web:a8b0d9c013b7839bcc04f3"
};

const firebase = initializeApp(firebaseConfig)
const firestore = initializeFirestore(firebase, {
    experimentalForceLongPolling: true,
    useFetchStreams: false,
})

const auth = getAuth()

export { firebase, firestore, auth }

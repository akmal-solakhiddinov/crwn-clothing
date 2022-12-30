// import firebase from "firebase/app";
import firebase from "firebase/compat/app";

// import "firebase/firestore";
// import "firebase/auth";
import "firebase/compat/auth"; //v9
import "firebase/compat/firestore"; //v9







const config = {
  apiKey: "AIzaSyA09UmtED9S_W14c7Cn2UOjEK-sqJKDKC0",
  authDomain: "crwn-db-b9d35.firebaseapp.com",
  projectId: "crwn-db-b9d35",
  storageBucket: "crwn-db-b9d35.appspot.com",
  messagingSenderId: "1068505194482",
  appId: "1:1068505194482:web:90e1653402c06ab041556b",
  measurementId: "G-J8B8WKYJFL",
};
firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
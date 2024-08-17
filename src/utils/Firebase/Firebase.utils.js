import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
  updateDoc,
  arrayUnion,
} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAk96U-94frb6u29dCMvNxt_Rj-I23_igM",
  authDomain: "capstone-mini-db-8b8b4.firebaseapp.com",
  projectId: "capstone-mini-db-8b8b4",
  storageBucket: "capstone-mini-db-8b8b4.appspot.com",
  messagingSenderId: "287677556744",
  appId: "1:287677556744:web:cc1c77de89fd8184edc9bd",
};

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);

const Googleprovider = new GoogleAuthProvider();
Googleprovider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInwithGooglePopup = () => {
  signInWithPopup(auth, Googleprovider)
    .then((result) => {
      // Handle successful sign-in
      console.log("Sign-in successful", result);
    })
    .catch((error) => {
      // Handle sign-in errors
      console.error("Sign-in error", error);
    });
};

export const signInwithGoogleRedirect = () =>
  signInWithRedirect(auth, Googleprovider);

export const db = getFirestore();

export const addCollectionandDocuments = async (
  collectionkey,
  objectsToAdd
) => {
  const collectionref = collection(db, collectionkey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docref = doc(collectionref, object.title.toLowerCase());
    batch.set(docref, object);
  });

  await batch.commit();
  console.log("done");
};

export const getCollectionAndDocuments = async () => {
  const collectionref = collection(db, "categories");
  const q = query(collectionref);
  const querySnapshot = await getDocs(q);
  const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const { title, items } = docSnapshot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});
  return categoryMap;
};

export const createUserDocumentFromAuth = async (
  UserAuth,
  AdditionalInfo = {}
) => {
  if (!UserAuth) return;
  const userDocRef = doc(db, "users", UserAuth.uid);

  const usersnapshot = await getDoc(userDocRef);

  if (!usersnapshot.exists()) {
    const { displayName, email } = UserAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...AdditionalInfo,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }
  return userDocRef;
};

export const createAuthUserWithEmailandPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailandPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);

export const storeOrder = async (userToken, cartItems) => {
  const userDocRef = doc(db, "users", userToken);

  const order = {
    cartItems,
    orderDate: new Date(),
  };

  try {
    // Check if the user document exists
    const userDocSnapshot = await getDoc(userDocRef);

    if (userDocSnapshot.exists()) {
      // Document exists, update the orders array
      await updateDoc(userDocRef, {
        orders: arrayUnion(order),
      });
      console.log("Order stored successfully in user document!");
    } else {
      // Document does not exist, create it with the orders field
      await setDoc(userDocRef, {
        orders: [order],
      });
      console.log("User document created and order stored successfully!");
    }
  } catch (error) {
    console.error("Error storing the order: ", error);
  }
};

export const getOrders = async (userToken) => {
  const userDocRef = doc(db, "users", userToken);

  try {
    // Get the user document
    const userDocSnapshot = await getDoc(userDocRef);

    if (userDocSnapshot.exists()) {
      // Document exists, retrieve orders
      const userData = userDocSnapshot.data();
      return userData.orders || []; // Return orders or an empty array if orders field is not present
    } else {
      // Document does not exist
      console.log("No orders found for this user.");
      return [];
    }
  } catch (error) {
    console.error("Error retrieving orders: ", error);
    return [];
  }
};

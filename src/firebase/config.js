import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCHfUzJkth_sIvbUyEABpwzP6wl_OSkMOU",
  authDomain: "instagram-46faa.firebaseapp.com",
  databaseURL: "https://instagram-46faa-default-rtdb.firebaseio.com",
  projectId: "instagram-46faa",
  storageBucket: "instagram-46faa.appspot.com",
  messagingSenderId: "1081212449070",
  appId: "1:1081212449070:web:2b8153efa0c764bf6b0abf",
};

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);

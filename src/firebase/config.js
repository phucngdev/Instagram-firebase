import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";

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
const auth = getAuth(app);
const database = getDatabase(app);
export { auth, database };

// const storage = getStorage(app);
// async function upload(colection, file) {
//   const fileObj = file.files[0];
//   let fileUrl = "";
//   if (fileObj) {
//     const storageRef = ref(storage, `${colection}/${fileObj.name}`);
//     try {
//       const snapshort = await uploadBytes(storageRef, fileObj);
//       const downloadUrl = await getDownloadURL(snapshort.ref);
//       fileUrl = downloadUrl;
//     } catch (error) {
//       console.log("Đã có lỗi xảy ra");
//     }
//   } else {
//     console.log("Tên hình ảnh không được để trống");
//   }
//   return fileUrl;
// }

// export default upload;

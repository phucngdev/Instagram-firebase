import { getDatabase, ref, child, get } from "firebase/database";
import { database } from "../firebase/config";

const getProfile = async (uid) => {
  let getData = null;
  const dbRef = ref(database);
  await get(child(dbRef, `user/${uid}`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        getData = snapshot.val();
      } else {
        console.log("No data available");
      }
    })
    .catch((error) => {
      console.error(error);
    });
  return getData;
};

export default getProfile;

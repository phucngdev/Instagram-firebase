import { getDatabase, ref, update } from "firebase/database";
import { database } from "../firebase/config";

const updatePhoto = async (uid, photoUrl) => {
  try {
    const userRef = ref(database, `user/${uid}`);
    await update(userRef, { photoUrl: photoUrl });
    console.log("Ok");
  } catch (error) {
    console.error("lỗi vào catch", error);
  }
};

export default updatePhoto;

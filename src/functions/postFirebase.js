import { getDatabase, ref, set } from "firebase/database";
import { database } from "../firebase/config";

const postFirebase = (collections, id, data) => {
  const dataCollection = ref(database, `${collections}/` + id);
  set(dataCollection, data);
};

export default postFirebase;

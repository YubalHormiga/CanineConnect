import { addDoc, collection, query } from "firebase/firestore";
import { defineStore } from "pinia";
import { useCollection,  useFirestore } from "vuefire";

export const useLostDogsStore = defineStore("lostDogs", () => {
  const db = useFirestore();


  const lostDogstQuery = query(collection(db, "lostDogs"));
  const lostDogsCollection = useCollection(lostDogstQuery);

  const addLostDog = async (dog) => {
    try {
      await addDoc(collection(db, "lostDogs"), dog);
      console.log(dog);
    } catch (error) {
      console.log(error);
    }
  };

  return { addLostDog, lostDogsCollection };
});

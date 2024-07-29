import { query } from "firebase/database";
import { addDoc, collection } from "firebase/firestore";
import { defineStore } from "pinia";
import { useCollection, useFirestore } from "vuefire";

export const useAdoptionStore = defineStore("adoption", () => {
  const db = useFirestore();

  const adoptionsQuery = query(collection(db, "adoptions"));

  const adoptionsCollection = useCollection(adoptionsQuery);

  async function createAdoption(adoption) {
    try {
      await addDoc(collection(db, "adoptions"), adoption);
    } catch (error) {
      console.log(error);
    }
  }
  return {
    createAdoption,
    adoptionsCollection,
  };
});

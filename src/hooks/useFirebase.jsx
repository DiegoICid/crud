import { React, useState } from 'react'
import db from '../service/Firebase'
import { addDoc, collection, getFirestore, getDocs, query } from 'firebase/firestore'




export default function useFirebase () {
  
  const getData = async () => {
    let dataArray = []; 
    try {
      
      const q = collection(db, '1');
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        //console.log(doc.id, " => ", doc.data());
        dataArray.push(doc.data());
      });
      return dataArray;

      /* console.log("resultdata: ", resultData.data)
      return resultData; */
  
    } catch (error) {
      console.log(error)
    }

  };


  const sayHi = () => {
    console.log("Hi!");
  }
  
  return {
    getData,
    sayHi,
    
  };
}
import { useState } from 'react'
import { getFirestore, collection, onSnapshot, addDoc, deleteDoc, doc, updateDoc } from "firebase/firestore";
import firebaseInitalization from './FirebaseConfig.jsx';



function EmployeeList() {
  // Initialize Cloud Firestore and get a reference to the service
  // const db = getFirestore(firebaseInitalization);
  return (
    <>
      <h1>This is the employee list page</h1>

      
    </>
  )
}

export default EmployeeList

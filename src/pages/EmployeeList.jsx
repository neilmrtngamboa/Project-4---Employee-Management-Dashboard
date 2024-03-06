import { useEffect, useState } from 'react';
import { getFirestore, collection, onSnapshot} from "firebase/firestore";
import firebaseInitialization from "./FirebaseConfig";

function EmployeeList() {
  // Initialize Cloud Firestore and get a reference to the service
  // const db = getFirestore(firebaseInitalization);

  useEffect(() => {
    
      // Initialize Cloud Firestore and get a reference to the service
      const db = getFirestore(firebaseInitialization);

      try {
          onSnapshot(collection(db,'employee-dashboard')), snapshot => {
            snapshot.forEach(employee => {
              console.log(employee.data)
            })
          }   
      } catch (error) {
        alert('cant fetch data');
      }


  }, [])
  
  return (
    <>
    <h1 className='fw-light text-center'>Employee List</h1>
    <div className="row">
      <div className="col-md-8 mx-auto">
        <div class="alert alert-info mt-3" role="alert">
          FirstName LastName Position Salary
        </div>
        <div class="alert alert-info mt-3" role="alert">
          FirstName LastName Position Salary
        </div>
      </div>
    </div>
    
    </>
  )
 
}
export default EmployeeList;

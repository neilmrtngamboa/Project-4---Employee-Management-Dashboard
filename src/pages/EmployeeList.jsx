import { useState } from 'react';



function EmployeeList() {
  // Initialize Cloud Firestore and get a reference to the service
  // const db = getFirestore(firebaseInitalization);
  
  return (
    <>
    <h1 className='fw-light text-center'>Employee List</h1>
    <div class="alert alert-info mt-3" role="alert">
        FirstName LastName Position Salary
    </div>
    </>
  )
 
}
export default EmployeeList;

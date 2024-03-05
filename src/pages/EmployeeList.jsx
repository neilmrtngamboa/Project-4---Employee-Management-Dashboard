import { useState } from 'react'
import { getFirestore, collection, onSnapshot, addDoc, deleteDoc, doc, updateDoc } from "firebase/firestore";
import firebaseInitialization from './FirebaseConfig.jsx';



function EmployeeList() {
  // Initialize Cloud Firestore and get a reference to the service
  // const db = getFirestore(firebaseInitalization);


  return (
    <section>
      <h1 className='text-center'>Employee list</h1>  
      <hr />
      <div className="border p-3 bg-transparent">
        <div className="row">
          <div className="col-md-4">
            <input className='form-control' type="text" placeholder='First Name' />
          </div>

          <div className="col-md-4">
            <input className='form-control' type="text" placeholder='Last Name' />
          </div>

          <div className="col-md-2">
            <input className='form-control' type="text" placeholder='Position' />
          </div>

          <div className="col-md-2">
            <input className='form-control' type="number" placeholder='Salary' />
          </div>

          <div className="d-grid gap-2 mt-3">
            <button className='btn btn-dark'>Add new Employee Record</button>
          </div>

        </div>
        
      </div>    

      
    </section>
  )
}

export default EmployeeList;

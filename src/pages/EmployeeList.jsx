import { useEffect, useState } from 'react';
import { getFirestore, collection, onSnapshot} from "firebase/firestore";
import firebaseInitialization from "./FirebaseConfig";
import './Style/EmployeeList.css'


function EmployeeList({firstname,lastname,salary,position}) {


  const [employeeRecord,setEmployeeRecord] = useState ([])

  useEffect(() => {
    
      // Initialize Cloud Firestore and get a reference to the service
      const db = getFirestore(firebaseInitialization);
      const dbReference = collection(db,'employee-dashboard');


      try {
            onSnapshot(dbReference,getEmployeeData => {
              const newEmployeeRecord = []
              getEmployeeData.forEach(employeeData => {
                
                newEmployeeRecord.push(employeeData.data());
                setEmployeeRecord(newEmployeeRecord);
                
              })
              console.log(employeeRecord)  
              
            })
          
      } catch (error) {
        alert('cant fetch data');
      }


  }, [])
  
  return (
    <>
      
      <h1 className='text-center' id='headfont'>Employee List</h1>
      {
        employeeRecord.map(showData => 
        <>
        <div className="row">
        <div className="col-md-8 mx-auto">
          <div className="alert alert-info mt-1 fw-light" role="alert">
            First Name: <b>{showData.firstname}</b> Last Name: <b>{showData.lastname}</b> Position: <b>{showData.position}</b> Salary: <b>${showData.salary}</b>
          </div>
        </div>
      </div>
        </>
        
        )

      }
    </>
  )
 
}
export default EmployeeList;

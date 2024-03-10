import { useEffect, useState } from 'react';
import { getFirestore, collection, onSnapshot} from "firebase/firestore";
import firebaseInitialization from "./FirebaseConfig";


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
      
      <h1 className='text-center'>Employee List</h1>
      {
        employeeRecord.map(showData => 
        <>
        <div className="row">
        <div className="col-md-8 mx-auto">
            <ul class="list-group list-group-flush">
              <li class="list-group-item">First Name: <b>{showData.firstname}</b> Last Name: <b>{showData.lastname}</b> Position: <b>{showData.position}</b> Salary: <b>${showData.salary}</b></li>
          </ul>
        </div>
      </div>
        </>
        
        )

      }
    </>
  )
 
}
export default EmployeeList;

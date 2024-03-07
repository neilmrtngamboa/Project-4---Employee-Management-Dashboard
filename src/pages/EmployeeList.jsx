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
    <div className="row">
      <div className="col-md-8 mx-auto">
        <div className="alert alert-info mt-3 fw-light" role="alert">
          First Name: <b>{firstname}</b> Last Name: <b>{lastname}</b> Position: <b>{position}</b> Salary: <b>${salary}</b>
        </div>
      </div>
    </div>
    {
      
    }

    
    </>
  )
 
}
export default EmployeeList;

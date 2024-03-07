import { useState, useEffect } from "react";
import { getFirestore, collection, onSnapshot} from "firebase/firestore";
import firebaseInitialization from "./FirebaseConfig";

function EmployeeCard () {

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
        <h1>This is the employee card page</h1>

        {
      employeeRecord.map(showData => 
      <>
        <div className="d-md-inline-flex">
            <div className="flex-md-row">
                <div className="card mt-2 ms-4 align-items-center">
                <img src="https://cdn-icons-png.flaticon.com/256/1177/1177568.png" class="card-img-top img-fluid mt-2" alt="..." style={{height:'8rem', width:'8rem'}}/>
                    <div className="card-body text-center" style={{width:'10rem', height:'10rem'}}>
                        <h5 className="card-title">{showData.firstname} {showData.lastname}</h5>
                        <p className="card-text">{showData.position}</p>
                        <p className="card-text">${showData.salary}</p>
                    </div>
                
                </div>
                

            </div>
        </div>
    </>
      
      )

    }
        </>
    )
}

export default EmployeeCard;
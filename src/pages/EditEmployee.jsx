import { useEffect, useState } from 'react';
import { getFirestore, collection, onSnapshot} from "firebase/firestore";
import firebaseInitialization from "./FirebaseConfig";

function EditEmployee () {

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
    <h1>This is the Update Employee page</h1>
    <div className="row">
        <div className="col-md-4">
            <div className="mb-3">
                <label for="UpdateFirstName" className="form-label">First Name:</label>
                <input type="text" className="form-control" id="UpdateFirstName" aria-describedby="emailHelp"/>
                <div id="emailHelp" className="form-text">We'll never share your records with anyone else.</div>
            </div>
        </div>

        <div className="col-md-4">
            <div className="mb-3">
                <label for="UpdateLastName" className="form-label">Last Name:</label>
                <input type="text" className="form-control" id="UpdateLastName" aria-describedby="emailHelp"/>
            </div>
        </div>

        <div className="col-md-2">
            <div className="mb-3">
                <label for="UpdatePosition" className="form-label">Job Role:</label>
                <input type="text" className="form-control" id="UpdateJobRole" aria-describedby="emailHelp"/>
            </div>
        </div>

        <div className="col-md-2">
            <div className="mb-3">
                <label for="UpdateSalary" className="form-label">Monthly Salary</label>
                <input type="number" className="form-control" id="UpdateSalary" aria-describedby="emailHelp"/>
            </div>
        </div>
    </div>

    

    {
  employeeRecord.map(showData => 
  <>
    <div className="d-md-inline-flex">
        <div className="flex-md-row">
            <div className="card mt-2 ms-4 align-items-center">
            <img src="https://cdn-icons-png.flaticon.com/256/1177/1177568.png" className="card-img-top img-fluid mt-2" alt="..." style={{height:'8rem', width:'8rem'}}/>
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

export default EditEmployee;
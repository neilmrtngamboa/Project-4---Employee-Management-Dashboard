import { useState, useEffect } from "react";
import { getFirestore, collection, onSnapshot, updateDoc,doc} from "firebase/firestore";
import firebaseInitialization from "./FirebaseConfig";
import EditEmployee from "./EditEmployee";

function EmployeeCard () {

    const [employeeRecord,setEmployeeRecord] = useState ([])

    const [employeeEdit, setEmployeeEdit] = useState({});

    useEffect(() => {
    
      // Initialize Cloud Firestore and get a reference to the service
      const db = getFirestore(firebaseInitialization);
      const dbReference = collection(db,'employee-dashboard');


      try {
            onSnapshot(dbReference,getEmployeeData => {
              const newEmployeeRecord = []
              getEmployeeData.forEach(employeeData => {
                
                let empID = employeeData.data();
                empID['employeeID'] = employeeData.id
                newEmployeeRecord.push(empID)                
              }) 
              setEmployeeRecord(newEmployeeRecord);
            })
          
      } catch (error) {
        alert('cant fetch data');
      }


    }, [])

    const setupUpdate = (employeeID,firstname,lastname,position,salary) => {

      setEmployeeEdit({
        employeeID: employeeID,
        firstname: firstname,
        lastname: lastname,
        position: position,
        salary: salary
      })
      console.log(employeeEdit);
    }

    const updateEmployeeRecord = () => {

      const db = getFirestore(firebaseInitialization);

      updateDoc(doc(db,'employee-dashboard',employeeEdit.employeeID), {
        firstname: employeeEdit.firstname,
        lastname: employeeEdit.lastname,
        position: employeeEdit.position,
        salary: employeeEdit.salary,
      })

    }

    return (
      <>
      <div className="row">
        <div className="col-md-4">
          <input type="text" className="form-control" name="" id=""
          onChange={(e) => setEmployeeEdit({
            ...employeeEdit,
            firstname:e.target.value
          })}
          value={employeeEdit.firstname} placeholder="First Name"/>
        </div>

        <div className="col-md-4">
          <input type="text" className="form-control" name="" id=""
          onChange={(e) => setEmployeeEdit({
            ...employeeEdit,
            lastname:e.target.value
          })}
          value={employeeEdit.lastname} placeholder="Last Name"/>
        </div>

        <div className="col-md-2">
          <input type="text" className="form-control" name="" id=""
          onChange={(e) => setEmployeeEdit({
            ...employeeEdit,
            position:e.target.value
          })}
          value={employeeEdit.position} placeholder="Position" />
        </div>

        <div className="col-md-2">
          <input type="number" className="form-control" name="" id=""
          onChange={(e) => setEmployeeEdit({
            ...employeeEdit,
            position:e.target.value
          })}
          value={employeeEdit.salary} placeholder="Salary"/>
        </div>
        
        <button className="btn btn-dark" onClick={updateEmployeeRecord}>Update Record</button>
      </div>
      
          {
            employeeRecord.map((Employee) =>
            <EditEmployee
              key={Employee.id}
              firstname={Employee.firstname}
              lastname={Employee.lastname}
              position={Employee.position}
              salary={Employee.salary}
              setupUpdate={setupUpdate}
              employeeID={Employee.employeeID}
            />
            )
          }
      </>
     
    )
}

export default EmployeeCard;
import { useState, useEffect } from "react";
import { getFirestore, collection, onSnapshot, updateDoc,doc,deleteDoc} from "firebase/firestore";
import firebaseInitialization from "./FirebaseConfig";
import EditEmployee from "./EditEmployee";
import './Style/EditEmployee.css'
import Swal from 'sweetalert2'


function EmployeeCard () {

    const [employeeRecord,setEmployeeRecord] = useState ([])

    const [employeeEdit, setEmployeeEdit] = useState({}); //container of the fetched data (with the ID); 

    const [updatebuttonStatus, setUpdateButtonStatus] = useState(true) //state of the update button

    const [FormStatus,setFormStatus] = useState(true) //state of the Update Form

    useEffect(() => {
    
      // Initialize Cloud Firestore and get a reference to the service
      const db = getFirestore(firebaseInitialization);
      const dbReference = collection(db,'employee-dashboard');


      try {
            onSnapshot(dbReference,getEmployeeData => {
              const newEmployeeRecord = []              //Container of the fetched data with ID
              getEmployeeData.forEach(employeeData => {
                
                let empID = employeeData.data();        //set the fetched data to empID
                empID['employeeID'] = employeeData.id   //set the employeeData.id to empID['employeeID']
                newEmployeeRecord.push(empID)           //push the fetched ID(empID) to the array (newEmployeeRecord)     
              }) 
              setEmployeeRecord(newEmployeeRecord);     //changed the state of the EmployeeRecord Array to the new array (newEmployeeRecord)
            })
          
      } catch (error) {
        alert('cant fetch data');
      }


    }, [])

    const setupUpdate = (employeeID,firstname,lastname,position,salary) => { //fetch the selected data

      setEmployeeEdit({             //Set the Object (EmployeeEdit) to the chosen record
        employeeID: employeeID,         
        firstname: firstname,
        lastname: lastname,
        position: position,
        salary: salary
      })
      setUpdateButtonStatus(false)  //undisable the button if the function (setupUpdate) is called
      setFormStatus(false)          //undisable the the form if the function (setupUpdate) is called
    }

    const updateEmployeeRecord = () => {

      const db = getFirestore(firebaseInitialization); // Get the data from the database

      updateDoc(doc(db,'employee-dashboard',employeeEdit.employeeID), { //update the selected data and set the state based from the Object (EmployeeEdit)
        firstname: employeeEdit.firstname,
        lastname: employeeEdit.lastname,
        position: employeeEdit.position,
        salary: employeeEdit.salary,
      })

      Swal.fire({
        title: 'Update Success',
        text: 'The record has been updated',
        icon: 'success',
        confirmButtonText: 'Ok',
        confirmButtonColor: '#0662c4',
        background: '#0b2d52',
        color: '#fafbfc'
      })

      setEmployeeEdit({     //Clear the values after updating the chosen data.
        firstname: '',
        lastname: '',
        position: '',
        salary: 0
      })
      setUpdateButtonStatus(true) //Disable the button after updating the chosen data.
    }

    const deleteRecord = (employeeID) => {

      Swal.fire({
        title: 'Delete Success',
        text: 'The record has been deleted',
        icon: 'success',
        confirmButtonText: 'Ok',
        confirmButtonColor: '#0662c4',
        background: '#0b2d52',
        color: '#fafbfc'
      })

      const db = getFirestore(firebaseInitialization); // Get the data from the database
      const deleteEmployee = doc(db,'employee-dashboard',employeeID)

      deleteDoc(deleteEmployee);

    }

    return (
      <>
      <div className="row ms-3">

        <div className="col-md-3 mb-1">
          <input type="text" className="form-control" name="" id=""
          onChange={(e) => setEmployeeEdit({  //To make changes to the data
            ...employeeEdit,                 //To retain each values of the Object (employeeEdit)
            firstname:e.target.value         //set the state of the firstname based on the event that happened.
          })}
          value={employeeEdit.firstname} disabled={FormStatus} placeholder="First Name"/> 
        </div>

        <div className="col-md-3 mb-1">
          <input type="text" className="form-control" name="" id=""
          onChange={(e) => setEmployeeEdit({
            ...employeeEdit,
            lastname:e.target.value
          })}
          value={employeeEdit.lastname} disabled={FormStatus} placeholder="Last Name"/>
        </div>

        <div className="col-md-2 mb-1">
          <input type="text" className="form-control" name="" id=""
          onChange={(e) => setEmployeeEdit({
            ...employeeEdit,
            position:e.target.value
          })}
          value={employeeEdit.position} disabled={FormStatus} placeholder="Position" />
        </div>

        <div className="col-md-2 mb-1">
          <input type="number" className="form-control" name="" id=""
          onChange={(e) => setEmployeeEdit({
            ...employeeEdit,
            salary:e.target.value
          })}
          value={employeeEdit.salary} disabled={FormStatus} placeholder="Salary"/>
        </div>
        
        <div className="col-md-2">
          <button className="btn" id="updateButton" disabled={updatebuttonStatus} onClick={updateEmployeeRecord}>Update Record</button>
        </div>
        
      </div>
      
          {
            employeeRecord.map((Employee) =>  //Pass the fetched data on the EditEmployee component.
            <EditEmployee
              key={Employee.id}
              firstname={Employee.firstname} 
              lastname={Employee.lastname}
              position={Employee.position}
              salary={Employee.salary}
              setupUpdate={setupUpdate}
              employeeID={Employee.employeeID}
              deleteRecord={deleteRecord}
            />
            )
          }
      </>
     
    )
}

export default EmployeeCard;
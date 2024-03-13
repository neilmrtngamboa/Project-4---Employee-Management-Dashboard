import { useState,useEffect } from "react";
import { getFirestore, collection, addDoc} from "firebase/firestore";
import firebaseInitialization from "./FirebaseConfig";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import EmployeeList from "./EmployeeList";
import './Style/AddEmployee.css'
import Swal from 'sweetalert2'
import {getAuth, onAuthStateChanged} from "firebase/auth";


function AddEmployee ({auth}) {

  
    
    const [employee,setEmployee] = useState({
        firstname: '',
        lastname: '',
        position: '',
        salary: 0
    
      });
    
    const [employeeList,setEmployeeList] = useState ([]);

    const [editToggle,setEditToggle] = useState(false);

    const [authenticated,setAuthenticated] = useState (false);

    useEffect( () => {

      const auth = getAuth(firebaseInitialization);
      onAuthStateChanged(auth, (user) => {
      if (user) {
          setAuthenticated(true);
          const uid = user.uid;
          
          // ...
      } else {
          // User is signed out
          // ...
          
      }
      });

  }, [])


    const AddEmployee = () => {
      
      // Initialize Cloud Firestore and get a reference to the service
      const db = getFirestore(firebaseInitialization);

      if (employee.firstname === '' || employee.lastname === '' || employee.position === '' || employee.salary === '' ){ //Condition if the form is empty
        Swal.fire({
          title: 'Error!',
          text: 'Please fill out the empty fields!',
          icon: 'error',
          confirmButtonText: 'Ok',
          confirmButtonColor: '#0662c4',
          background: '#0b2d52',
          color: '#fafbfc'
        })
      }else{
        addDoc(collection(db,'employee-dashboard'),employee); //Adding a document to the firebase collection
        
        setEmployeeList(employeeList => [...employeeList, employee]) //pushing the employee value to the employeeList array
        
        //Alert when the data has been successfully added
        Swal.fire({
          title: 'Success',
          text: `${employee.firstname} ${employee.lastname} has been successfully added!`,
          icon: 'success',
          confirmButtonText: 'Ok',
          confirmButtonColor: '#0662c4',
          background: '#0b2d52',
          color: '#fafbfc'
        })
        setEmployee({             //Clearing the values of the form and the OnChange value
          firstname: '',
          lastname: '',        
          position: '',
          salary: 0
        })
      }
      
    }

  
  if (authenticated){
    return (
      <section>
        <h1 className="mb-4 text-center" id="headFont">EMD Record</h1>
        <div className=" shadow p-3" id="Borderbg">
          <div className="row">
            <div className="col-md-4 mb-1">
              <input className='form-control' type="text" placeholder='First Name' 
                onChange={(e) => setEmployee({ //adding OnChange to show typed data in the page
                  ...employee,                //retaining the values of the employee object
                  firstname: e.target.value
  
                })} 
                value={employee.firstname} //changing the value of the form based on the employee state
              />
            </div>
  
            <div className="col-md-4 mb-1">
              <input className='form-control' type="text" placeholder='Last Name' 
                  onChange={(e) => setEmployee({ 
                    ...employee,
                    lastname: e.target.value
      
                  })} 
                  value={employee.lastname} 
              />
            </div>
  
            <div className="col-md-2 mb-1">
              <input className='form-control' type="text" placeholder='Position' 
                onChange={(e) => setEmployee({ 
                  ...employee,
                  position: e.target.value
    
                })} 
                value={employee.position} 
              />
            </div>
  
            <div className="col-md-2 mb-1">
              <input className='form-control' type="number" placeholder='Salary' 
                onChange={(e) => setEmployee({ 
                  ...employee,
                  salary: e.target.value
  
                })} 
                value={employee.salary} 
              />
            </div>
  
            <div className="d-grid gap-2 mt-3">
              <button className='btn' id="addButton" onClick={AddEmployee}>Create Record</button>
            </div>
  
          </div>
          
        </div>
  
        <div className="card mt-3" id="addedList"> 
            <div className="card-body p-2">
              <div className="row">
                <div className="col-md-4">
                  <div className='text-center'>
                    <h5> First Name:</h5>
                    <h5 className='fw-light'>{employee.firstname}</h5>
                  </div>
                </div>
  
                <div className="col-md-4">
                  <div className='text-center'>
                    <h5> Last Name:</h5>
                    <h5 className='fw-light'>{employee.lastname}</h5>
                  </div>
                </div>
  
                <div className="col-md-2">
                  <div className='text-center'>
                    <h5> Position:</h5>
                    <h5 className='fw-light'>{employee.position}</h5>
                  </div>
                </div>
  
                <div className="col-md-2">
                  <div className='text-center'>
                    <h5>Monthly Salary:</h5>
                    <h5 className='fw-light'>${employee.salary}</h5>
                  </div>
                </div>
  
              </div>
                
            </div>
        </div>
        {employeeList.map(show => 
        <>
        <div className="row" id="headFont">
        <div className="col-md-8 mx-auto">
          <div className="alert alert-info mt-3 fw-light" role="alert">
            First Name: <b>{show.firstname}</b> Last Name: <b>{show.lastname}</b> Position: <b>{show.position}</b> Salary: <b>${show.salary}</b>
          </div>
        </div>
        </div>
       
        </>
        
        )
  
        }
        
      </section>
    )
  }else{
    return (
      <>
      <h1>Welcome Guest!</h1>
      </>
    )
  }

  
        
    
}
export default AddEmployee;
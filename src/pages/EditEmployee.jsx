import './Style/EditEmployee.css'
import { useEffect,useState } from 'react';
import firebaseInitialization from '../pages/FirebaseConfig';
import {getAuth, onAuthStateChanged} from "firebase/auth";


function EditEmployee ({firstname,lastname,salary,position,employeeID,setupUpdate,deleteRecord, auth}) {

    const [authenticated,setAuthenticated] = useState (false);
    
   useEffect(() => {

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


if (authenticated) {
    return (
        <>
        <>
            <div className="d-md-inline-flex mt-3" id='cardFont'>
                <div className="flex-md-row">
                    <div className="card mt-2 ms-4 align-items-center p-2" data-aos="fade-down" id='Card'>
                        <img src="https://cdn-icons-png.flaticon.com/256/1177/1177568.png" id='img' class="card-img-top img-fluid mt-2" alt="..." style={{height:'8rem', width:'8rem'}}/>
                        <div className="card-body text-center">
                            <h5 className="card-title">{firstname}   {lastname}</h5>
                            <p className="card-text">{position}</p>
                            <p className="card-text">Monthly Salary: <b>${salary}</b></p>
                            
                        </div>
                        <div className="d-flex mb-3">
                            <button className="btn" id='Edit' onClick={()=> {setupUpdate (employeeID,firstname,lastname,position,
                                salary)}}>Edit</button>
                            <button className="btn ms-2" id='Delete' onClick={ ()=> deleteRecord (employeeID)}>Delete Record</button>
                        </div>
                        
                       
                    </div> 
                    
    
                </div>
            </div>
        </>
        </>
    )
}else {
    return (
        <>
        </>
    )
}
    



}

export default EditEmployee;
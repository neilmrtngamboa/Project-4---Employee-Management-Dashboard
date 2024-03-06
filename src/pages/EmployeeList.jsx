import { useState } from 'react';



function EmployeeList() {
  // Initialize Cloud Firestore and get a reference to the service
  // const db = getFirestore(firebaseInitalization);
  const [employee,setEmployee] = useState({
    firstname: '',
    lastname: '',
    position: '',
    salary: ''

  });


  return (
    <section>
      <h1 className='text-center'>Employee list</h1>  
      <hr />
      <div className="border p-3 bg-transparent">
        <div className="row">
          <div className="col-md-4">
            <input className='form-control' type="text" placeholder='First Name' 
              onChange={(e) => setEmployee({ 
                ...employee,
                firstname: e.target.value

              })} 
              value={employee.firstname} 
            />
          </div>

          <div className="col-md-4">
            <input className='form-control' type="text" placeholder='Last Name' 
                onChange={(e) => setEmployee({ 
                  ...employee,
                  lastname: e.target.value
    
                })} 
                value={employee.lastname} 
            />
          </div>

          <div className="col-md-2">
            <input className='form-control' type="text" placeholder='Position' 
              onChange={(e) => setEmployee({ 
                ...employee,
                position: e.target.value
  
              })} 
              value={employee.position} 
            />
          </div>

          <div className="col-md-2">
            <input className='form-control' type="number" placeholder='Salary' 
              onChange={(e) => setEmployee({ 
                ...employee,
                salary: e.target.value

              })} 
              value={employee.salary} 
            />
          </div>

          <div className="d-grid gap-2 mt-3">
            <button className='btn btn-dark'>Add new Employee Record</button>
          </div>

        </div>
        
      </div>

      <div className="card bg-dark-subtle mt-3">
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
                  <h5> Salary:</h5>
                  <h5 className='fw-light'>${employee.salary}</h5>
                </div>
              </div>

            </div>
              
          </div>
      </div>    

      
    </section>
  )
}

export default EmployeeList;

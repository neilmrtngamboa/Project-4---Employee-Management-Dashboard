function EditEmployee ({firstname,lastname,salary,position,employeeID,setupUpdate,deleteRecord}) {
return (
    <>
    <>
        <div className="d-md-inline-flex mt-3">
            <div className="flex-md-row">
                <div className="card mt-2 ms-4 align-items-center">
                    <img src="https://cdn-icons-png.flaticon.com/256/1177/1177568.png" class="card-img-top img-fluid mt-2" alt="..." style={{height:'8rem', width:'8rem'}}/>
                    <div className="card-body text-center">
                        <h5 className="card-title">{firstname}  {lastname}</h5>
                        <p className="card-text">{position}</p>
                        <p className="card-text">Monthly Salary: <b>${salary}</b></p>
                        
                    </div>
                    <div className="d-flex mb-3">
                        <button className="btn btn-secondary" onClick={()=> {setupUpdate (employeeID,firstname,lastname,position,
                            salary)}}>Edit</button>
                        <button className="btn btn-danger ms-2" onClick={ ()=> deleteRecord (employeeID)}>Delete Record</button>
                    </div>
                    
                  
                </div> 
                

            </div>
        </div>
    </>
    </>
)


}

export default EditEmployee;
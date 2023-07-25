import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const EmpDetail = () => {
    const{ employeeid }=useParams();
    const[employeedata,employeedatachange]=useState({})

    useEffect(()=>{
        fetch("http://localhost:8000/employee/"+employeeid).then((response)=>{
            return response.json();
        }).then((response)=>{
            employeedatachange(response);
        }).catch((error)=>{
            console.log(error);
        })
    },[employeeid]);
    return(
        <div>
            { employeedata &&
                <div>
                    <h2>The Employee name is {employeedata.name} ({employeedata.id})</h2>
                    <h3>Contact Details</h3>
                    <h5>Email is {employeedata.email}</h5>
                    <h5>Phone number is {employeedata.phone}</h5>
                    <Link className="btn btn-danger" to={'/'}>Back to Listing</Link>
                </div>
            }
        </div>
    );
}

export default EmpDetail;
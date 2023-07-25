//json-server --watch db.json --port 8000

import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";



const EmpListing = () => {
    const [employeedata,employeedatachange] = useState(null);
    const navigate = useNavigate();

    const loadDetails=(id)=>{
        navigate('/employee/detail/'+id);
    };
    const loadEdit=(id)=>{
        navigate('/employee/edit/'+id);
    };
    const remove=(id)=>{
        if(window.confirm('Do you want to remove?') && window.confirm('You are sure?')){
            fetch("http://localhost:8000/employee/"+id,{
            method:"DELETE",
        }).then((response)=>{
            alert('Removed Successfully')
            window.location.reload()

        }).catch((error)=>{
            console.log(error.message);
        })
        }
    };





    useEffect(()=>{
        fetch("http://localhost:8000/employee").then((response)=>{
            return response.json();
        }).then((response)=>{
            employeedatachange(response);
        }).catch((error)=>{
            console.log(error);
        })
    },[]
    )
    return(
        <div className="container">
            <div className="card">
                <div className="card-title">
                    <h2>Employee Listing</h2>
                </div>
                <div className="card-body">
                    <div className="divbtn">
                        <Link to="employee/create" className="btn btn-success">Add New (+)</Link>
                    </div>
                    <table className="table table-bordered">
                        <thead className="bg-dark text-white">
                            <tr>
                                <td>ID</td>
                                <td>Name</td>
                                <td>Email</td>
                                <td>Phone</td>
                                <td>Action</td>
                            </tr>
                        </thead>
                        <tbody>
                            {   employeedata &&
                                employeedata.map(user => (
                                    <tr key={user.id}>
                                        <td>
                                        {user.id}
                                        </td>
                                        <td>
                                        {user.name}
                                        </td>
                                        <td>
                                        {user.email}
                                        </td>
                                        <td>
                                        {user.phone}
                                        </td>
                                        <td>
                                            <a onClick={(()=>{loadEdit(user.id)})} className="btn btn-success">Edit</a>
                                            <a onClick={(()=>{loadDetails(user.id)})} className="btn btn-primary">Details</a>
                                            <a onClick={(()=>{remove(user.id)})} className="btn btn-danger">Remove</a>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
export default EmpListing;
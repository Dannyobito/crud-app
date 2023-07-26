import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const EmpCreate = () => {
    const[id]=useState("");
    const[name,namechange]=useState("");
    const[email,emailchange]=useState("");
    const[phone,phonechange]=useState("");
    let[active,activechange]=useState(false);
    const[validation,validationchange]=useState(false);
    const[password,passwordchange]=useState("");
    const[confirmpassword,confirmpasswordchange]=useState("");
    const[passworderror,setpassworderror] = useState("")
    const navigate=useNavigate();


    const handleSubmit = (e)=>{
        e.preventDefault();
        if (password !== confirmpassword) {
            setpassworderror('Passwords do not match');
            return;
          }
        const employeedata={name,email,phone,active,password};; 
        fetch("http://localhost:8000/employee",{
            method:"POST",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(employeedata),
        }).then((respnse)=>{
            alert('Saved Successfully')
            navigate('/')

        }).catch((error)=>{
            console.log(error.message);
        })
    }



    return(
        <div>
            <div className="row">
                <div className="offset-lg-3 col-lg-6">
                    <form className="container" onSubmit={handleSubmit} > 
                        <div className="card" style={{"textAlign":"left"}}>
                            <div className="card-title">
                                <h2>Employee Create</h2>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>ID</label>
                                            <input className="form-control" value={id} disabled="disabled"></input>
                                        </div>                                        
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Name</label>
                                            <input required value={name} onMouseDown={e=>validationchange(true)} onChange={e=>namechange(e.target.value)} className="form-control"></input>
                                            {name.length===0 && validation && <span className="text-danger">Enter the name</span>}
                                        </div> 
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Email</label>
                                            <input type="email" required value={email} onChange={e=>emailchange(e.target.value)} className="form-control"></input>
                                        </div>                                        
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Phone</label>
                                            <input type="number" value={phone} onChange={e=>phonechange(e.target.value)} className="form-control"></input>
                                        </div>                                        
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Password</label>
                                            <input type="password" value={password} onChange={e=>passwordchange(e.target.value)} className="form-control"></input>
                                        </div>                                        
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Confirm password</label>
                                            <input type="password" value={confirmpassword} onChange={e=>confirmpasswordchange(e.target.value)} className="form-control"></input>
                                            {{passworderror} && <span className="text-danger">{passworderror}</span>}
                                        </div>                                        
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-check">
                                            <input checked={active} onChange={e=>activechange(e.target.checked)} type="checkbox" className="form-check-input"></input>
                                            <label className="form-check-label">Is Active</label>
                                        </div>                                        
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <button type="submit" className="btn btn-success">Save</button>
                                            <Link to="/" className="btn btn-danger">Back</Link>
                                        </div>                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default EmpCreate;
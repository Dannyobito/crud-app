import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";






const EmpLogin = () => {
    const navigate = useNavigate();
    const [loginerror,setloginerror] = useState("")

    const [loginemail,setloginemail] = useState("");

    const [loginpassword,setloginpassword] = useState("");
    

    const[empdetails,setempdetails] = useState([]);

    const handleSubmit = (e)=>{
        e.preventDefault(); 
        empdetails.forEach(detail => {
            if(detail.email=== loginemail && detail.password===loginpassword ){
                navigate("/employee/listing")
            }
            else{
                navigate("/")
                setloginerror("Invalid username/password")
            }
        });
    }
    useEffect(()=>{
        fetch("http://localhost:8000/employee").then((response)=>{
                return response.json();
            }).then((response)=>{
                setempdetails(response);
            }).catch((error)=>{
                console.log(error);
            })
    },[])



    return(
        <div>
           <div className="row">
                <div className="offset-lg-3 col-lg-6">
                    <form className="container" onSubmit={handleSubmit} > 
                        <div className="" style={{"textAlign":"left"}}>
                            <div className="card-title">
                                <h2>Employee Login</h2>
                                {{loginerror} && <span className="text-danger">{loginerror}</span>}
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Email</label>
                                            <input className="form-control" value={loginemail} onChange={e=>setloginemail(e.target.value)} placeholder="input username"></input>
                                        </div>                                        
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Password</label>
                                            <input className="form-control" value={loginpassword} onChange={e=>setloginpassword(e.target.value)} placeholder="input password"></input>
                                        </div>                                        
                                    </div>
                                    
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <button type="submit" className="btn btn-success">Login</button>
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





export default EmpLogin;
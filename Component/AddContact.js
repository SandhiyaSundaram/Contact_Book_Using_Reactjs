import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
//import { useHistory } from 'react-router-dom';*/
import { useNavigate } from 'react-router-dom';



const AddContact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");

    const contacts = useSelector((state) => state);
    const dispatch = useDispatch();

    const history = useNavigate();

    const handleSubmit = (e) =>{
        e.preventDefault();

        const checkEmail = contacts.find(
            (contact) => contact.email === email && email 
        );
        const checkNumber = contacts.find(
            (contact) => contact.number === parseInt(number)
        );

        if(!email || !name || !number ){
            return toast.warning(" All the fields required! ")
        }
        if(checkEmail){
            return toast.error("This Email already exists!")
        }
        if(checkNumber){
            return toast.error("This Number already exists!")
        }

        const data = {
            id: contacts[contacts.length-1].id + 1, name, email, number,
        };
        dispatch({type: "ADD_CONTACT", payload:data});
        toast.success("Successfully Added!");
        history('/');
    };

    return(
        <div className ="container">
            <h1 className="display-3 text-center m-4">
                Add Contact
            </h1>
            <div className ="row">                   
                <div className ="col-md-6 shadow mx-auto p-5">
                    <form onSubmit ={handleSubmit}>
                        <div className="form-group m-3">
                            <input type="text" placeholder="Name" className="form-control" value ={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className="form-group m-3">
                            <input type="email" placeholder="Email" className="form-control" value ={email} onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                        <div className="form-group m-3">
                            <input type="number" placeholder="Phone number" className="form-control" value ={number} onChange={(e) => setNumber(e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <input type="submit" value="Add Contact" className="btn btn-block btn-dark m-4"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddContact;
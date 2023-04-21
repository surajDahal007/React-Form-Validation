import React, { useState} from 'react';
import './App.css';

export default function App(){

  const[name,setName] = useState("");
  const[email,setEmail] = useState("");
  const[birthday,setBirthday] = useState("");
  const[password,setPassword] = useState("");
  const[cpassword,setCpassword]= useState("");
  

  const handleClick = (e)=>{
    e.preventDefault();
    console.log("Form is checked");
  
    setName("");
    setEmail("");
    setBirthday("");
    setPassword("");
    setCpassword("");

    var name = document.form.fname;
    var email = document.form.femail;
    var birthday = document.form.fbday;
    var password = document.form.fpassword;
    var cpassword = document.form.fcpassword;

    console.log(birthday.value);
    console.log(birthday.value.length); 
    
    if(name.value.length<=0){
      name.focus();
      setName("*Username is required");
      console.log("userName is required");
      return false;
    }

    if(name.value.length>10 || name.value.length<4){
      name.focus();
      setName("*Max 10 & Min 4 characters allowed")
      console.log("Max 10 and Min 4 characters allowed");
      return false;
    }

    if(email.value.length<=0){
      email.focus();
      setEmail("*Email is required");
      console.log("Email is required");
      return false;
    }

    if(birthday.value.length<=0){
      birthday.focus();
      setBirthday("*Birthday is required");
      console.log("birthday is required");
      return false;
    }

    if(password.value.length<=0){
      password.focus();
      setPassword("*Password is required");
      console.log("Password is required");
      return false;
    }

    if(password.value.length<6){
      password.focus();
      setPassword("*Minimum 6 characters needed")
      console.log("Minimum 6 characters needed");
      return false;
    }

    if(password.value.length>20){
      password.focus();
      setPassword("*Maximum 20 characters allowed")
      console.log("Maximum 20 characters allowed");
      return false;
    }

    if(cpassword.value.length<=0){
      cpassword.focus();
      setCpassword("*Password is required");
      console.log("Password is required");
      return false;
    }

    if(password.value!==cpassword.value){
      setCpassword("*Password didn't match");
      cpassword.focus();
      console.log("Password didn't match");
      return false;
    }

    if(email.value.length>0){
      var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

      if(email.value.match(validRegex)){
        return true;
      } 
      else{
        setEmail("*Invalid Email");
        console.log("Invalid email")
        email.focus();
        return false;
      }
    }

    // alert("Form will be submitted");

  }


  return(
    <>
    <div className='main'>
      <h2 className='heading'>Register</h2>

      <form name='form' method='post'>
        <label><b>Username*</b></label>
        <br />
        <input type='text' placeholder='Username' name='fname' className='inputs'></input>
        <br />
        <span className='error'>{name}</span>
        <br />

        <label><b>Email*</b></label>
        <br />
        <input type='email' placeholder='Email' name='femail' className='inputs'></input>
        <br />
        <span className='error'>{email}</span>
        <br />

        <label><b>Birthday*</b></label>
        <br />
        <input type='date' placeholder='Birthday' name='fbday' className='inputs'></input>
        <br />
        <span className='error'>{birthday}</span>
        <br />

        <label><b>Password*</b></label>
        <br />
        <input type='password' placeholder='Password' name='fpassword' className='inputs'></input>
        <br />
        <span className='error'>{password}</span>
        <br />

        <label><b>Confirm Password*</b></label>
        <br />
        <input type='password' placeholder='Password' name='fcpassword' className='inputs'></input>
        <br />
        <span className='error'>{cpassword}</span>
        <br />

        <input type='reset' className='clear'></input>
        <br />
        <br />
        <button className='submit' onClick={handleClick}>
          <span className='submitText'>SUBMIT</span>
        </button>
      </form>
    </div>
    </>
  );
}
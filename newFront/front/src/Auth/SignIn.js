import React, {useState} from 'react';
import {MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import { toast } from 'react-toastify';
//import { signIn } from '../Services/user_service';

export default function App() {

 const [login, setLogin]= useState({
  Email:'',
  Password:''
 })

 const handlerChange=(event, field)=>{
  let actualValue=event.target.value
  setLogin({
    ...login,[field]:actualValue
  })
 }

//  const handlerFormSubmit=(event)=>{
//   event.preventDefault();
//   console.log(login);
//   if(login.Email.trim==='' || login.Password.trim)
//   {
//     toast.error("Email or Password required");
//     return;
//   }

//   signIn(login).then((jwtTokenData)=>{
//     console.log()
//   })
//  }


  return (
    <MDBContainer fluid className="p-3 my-5 h-custom">
      {/* <form
          onSubmit={handlerFormSubmit}
          style={{ marginTop: "0px", padding: "0px 0px" }}
          id="form1"> */}
      <MDBRow>
      <p className='text-center text-ml-start mr-4 pr-2'><h1>Login</h1></p>


        <MDBCol col='10' md='6'>
          <img src="https://media.istockphoto.com/id/1353185042/vector/professional-automobile-maintenance-and-service-application-car-repair-app-concept.jpg?s=170667a&w=0&k=20&c=LhJb-I1ev1kQfGINWG34fU7Ce2WfRAELqn_ZHmlloNM=" class="img-fluid" alt="Sample image" />
        </MDBCol>

        <MDBCol col='4' md='6'>

          <MDBInput wrapperClass='mb-4' label='Email' id='formControlLg' type='email' size="lg" value={login.Email} onChange={(e)=>handlerChange(e,'Email')}/>
          <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg" value={login.Password} onChange={(e)=>handlerChange(e,'Password')}/>

          <div className="d-flex justify-content-between mb-4">
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
            <a href="!#">Forgot password?</a>
          </div>

          <div className='text-center text-md-start mt-4 pt-2'>
            <MDBBtn className="mb-0 px-5" size='lg'>Login</MDBBtn>
            <p className="small fw-bold mt-2 pt-1 mb-2">Don't have an account? <a href="/signUp" className="link-danger">SignUp</a></p>
          </div>

        </MDBCol>

      </MDBRow>
      {/* </form> */}
    </MDBContainer>
  );
}


import React from 'react';
import {MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';

function App() {

  return (
    <MDBContainer fluid className="p-3 my-5 h-custom">

      <MDBRow>
      <p className='text-center text-ml-start mr-4 pr-2'><h1>Login</h1></p>


        <MDBCol col='10' md='6'>
          <img src="https://media.istockphoto.com/id/1353185042/vector/professional-automobile-maintenance-and-service-application-car-repair-app-concept.jpg?s=170667a&w=0&k=20&c=LhJb-I1ev1kQfGINWG34fU7Ce2WfRAELqn_ZHmlloNM=" class="img-fluid" alt="Sample image" />
        </MDBCol>

        <MDBCol col='4' md='6'>

          <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg"/>
          <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg"/>

          <div className="d-flex justify-content-between mb-4">
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
            <a href="!#">Forgot password?</a>
          </div>

          <div className='text-center text-md-start mt-4 pt-2'>
            <MDBBtn className="mb-0 px-5" size='lg'>Login</MDBBtn>
            <p className="small fw-bold mt-2 pt-1 mb-2">Don't have an account? <a href="#!" className="link-danger">SignUp</a></p>
          </div>

        </MDBCol>

      </MDBRow>

     

       

      
     

    </MDBContainer>
  );
}

export default App;
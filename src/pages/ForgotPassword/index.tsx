
import React from 'react'
import './styles.css'
import { Form, FormField, Header } from 'semantic-ui-react'
import Logo from '../../images/logo.png';
import { Link } from 'react-router-dom';

export default function ForgotPassword () {
  return (
    <>
      <div className='forgot-container'>

        <div className='login-container'>

          <div className='login-container-header'>
            <a href='https://www.lipsum.com/feed/html' >Need help?</a>
          </div>

          <div className='content'>

            <div className='left-side-wrapper' >
              <div className='logo-container'>
                <img src={Logo} width={40} alt='logo' />
                <Header as="strong" size={'medium'} >
                  CleanMyCar
                </Header>
                <p className="description">Indias's first waterless car cleaning company</p>
              </div>
            </div>


            <div className='forgot-form'>
              <Header textAlign='center'>
                <h3> Forgot Password</h3>
              </Header>


              <Header as="h5" textAlign='center'
              >

                Please enter the email address you'd like your password reset information sent to

              </Header>


              <Form >
                <FormField>
                  <label>Email</label>
                  <input type='email' placeholder='joe@email.com' />
                </FormField>

                <button type='submit' >
                  Request reset link
                </button>

                <Link to={'/'} >Back to login</Link>

              </Form>
            </div>
          </div>

        </div>


      </div >
    </>
  );
}

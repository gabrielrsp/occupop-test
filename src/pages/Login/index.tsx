import React from 'react'
import './styles.css'
import { Form, FormField, Header } from 'semantic-ui-react'
import Logo from '../../images/logo.png';
import { Link } from 'react-router-dom';

export default function Login () {
  return (
    <>
      <div className='container'>
        <div className='login-container'>
          <div className='login-container-header'>
            <a href='https://www.lipsum.com/feed/html' >Need help?</a>
          </div>
          <div className='content'>
            <div className='left-side-wrapper' >
              <div className='logo-container'>
                <img src={Logo} width={40} alt="logo" />
                <Header as="strong" size={'medium'} >
                  CleanMyCar
                </Header>
                <p className="description">Indias's first waterless car cleaning company</p>
              </div>
            </div>
            <div className='form'>
              <Header textAlign='center' >
                <h3> Log in</h3>
              </Header>
              <Form >
                <FormField>
                  <label>Email</label>
                  <input type='email' placeholder='joe@email.com' />
                </FormField>
                <FormField>
                  <label>Password</label>
                  <input type='password' placeholder='Enter your Password' />
                </FormField>
                <button type='submit' >
                  Login
                </button>
                <Link to={'/forgot-password'} >Forgot password?</Link>
              </Form>
            </div>
          </div>
        </div>
      </div >
    </>
  );
}

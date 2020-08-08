import React, { useState, useContext, createRef } from 'react';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';

import '../../App.css';
import { AuthContext } from '../../Context/auth-context';
const Landing = (props) => {
  const [register, setRegister] = useState(true);
  const { dispatch } = useContext(AuthContext);
  const email = createRef('');
  const password = createRef('');
  const name = createRef('');
  const date_of_birth = createRef('');

  const handleAuth = (e) => {
    e.preventDefault();
    if (register) {
      const registerData = {
        query: `{
						createUser(userInput:{
							name:"Another Pramish Luitel"
							email:"admin@gmail.com"
							dateOfBirth:"20/12/1996"
							password:"helloadmin"
									})
									{
									name
									}
				 }`,
      };
      fetch('https://usergreetings.herokuapp.com/graphql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(registerData),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
    } else {
      const loginData = {
        query: `{
      				login(loginInput:{
      				email:"${email.current.value}"
      				password:"${password.current.value}"
      				})
      				{
      				token
      				}
      			}`,
      };
      fetch('https://usergreetings.herokuapp.com/graphql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginData),
      })
        .then((res) => res.json())
        .then((data) => {
          dispatch({
            type: 'LOGIN',
            auth: {
              token: data.data.login.token,
            },
          });
          props.history.push('/dashboard');
        });
    }
    console.log(email.current.value);
    console.log(password.current.value);
  };
  return (
    <div>
      <Header />
      <>
        <div>
          <p className='logintext'>
            {register ? 'Create Your Account' : 'Access your account'}
          </p>
        </div>
        <form onSubmit={handleAuth}>
          <div className='authform'>
            <div className='input-field col s6 fields'>
              <input
                id='email'
                type='text'
                className='validate'
                required
                ref={email}
              />
              <label htmlFor='email'>Email Address</label>
            </div>
            <div className='input-field col s6 fields'>
              <input
                id='password'
                type='password'
                className='validate'
                ref={password}
                required
              />
              <label htmlFor='password'>Password</label>
            </div>
            {register ? (
              <>
                <div className='input-field col s6 fields'>
                  <input
                    id='name'
                    type='text'
                    className='validate'
                    ref={name}
                    required
                  />
                  <label htmlFor='name'>Name</label>
                </div>
                <div className='input-field col s6 fields'>
                  <input
                    type='text'
                    id='date'
                    className='validate'
                    ref={date_of_birth}
                    required
                  />
                  <label htmlFor='date'>Date of Birth</label>
                </div>
              </>
            ) : (
              <></>
            )}
          </div>

          <div className='submitbtn'>
            <button
              className='btn waves-effect waves-light'
              type='submit'
              name='action'
            >
              {register ? 'Register' : 'Login'}
            </button>
            <div>
              <p
                onClick={() => setRegister(() => !register)}
                className='logintext'
              >
                {register ? 'Already have an account?' : "Don't Have account?"}
              </p>
            </div>
          </div>
        </form>
      </>
      <Footer />
    </div>
  );
};
export default Landing;

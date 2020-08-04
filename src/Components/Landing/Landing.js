import React, { useState, useEffect } from 'react';
import '../../App.css';
import { login } from '../../utils';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
const Landing = (props) => {
  const [register, setRegister] = useState(true);
  const [token, setToken] = useState(null);
  const handleAuth = () => {
    if (register) {
      const registerData = {
        query: `{
						createUser(userInput:{
							name:"Another Pramish Luitel"
							email:"admsin@gmail.com"
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
      // const loginData = {
      //   query: `{
      // 				login(loginInput:{
      // 				email:"admin@gmail.com"
      // 				password:"helloadmin"
      // 				})
      // 				{
      // 				token
      // 				}
      // 			}`,
      // };
      // fetch('https://usergreetings.herokuapp.com/graphql', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(loginData),
      // })
      //   .then((res) => res.json())
      //   .then((data) => {
      //     console.log(data.data.login.token);
      //     setToken(data.data.login.token);
      //   });
      // console.log(token);
      // login(token);
      login();
      props.history.push('/dashboard');
    }
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
        <form>
          <div className='authform'>
            <div className='input-field col s6 fields'>
              <input id='email' type='text' className='validate' />
              <label htmlFor='email'>Email Address</label>
            </div>
            <div className='input-field col s6 fields'>
              <input id='password' type='password' className='validate' />
              <label htmlFor='password'>Password</label>
            </div>
            {register ? (
              <>
                <div className='input-field col s6 fields'>
                  <input id='cpassword' type='password' className='validate' />
                  <label htmlFor='cpassword'>Confirm Password</label>
                </div>
                <div className='input-field col s6 fields'>
                  <input id='name' type='text' className='validate' />
                  <label htmlFor='name'>Name</label>
                </div>
                <div className='input-field col s6 fields'>
                  <input type='text' id='date' className='validate' />
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
              type='button'
              name='action'
              onClick={handleAuth}
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

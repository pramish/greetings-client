import React from 'react';
import '../../App.css';
import { login } from '../../utils';
const Landing = (props) => {
  const [register, setRegister] = React.useState(true);
  const handleAuth = (e) => {
    if (register) {
      // I have to register the account
    } else {
      // I have to Signin into the account
      login();
      props.history.push('/dashboard');
    }
  };
  return (
    <div>
      <div className='navbar-fixed'>
        <nav>
          <div className='nav-wrapper menu'>
            <a href='https://usergreetings.netlify.app/' className='brand-logo'>
              Greetings
            </a>
            {/* <ul id='nav-mobile' className='right hide-on-med-and-down'>
              <button
                onClick={() => setAuthPage(() => !authPage)}
                data-target='modal1'
                className='account btn '
                type='button'
                name='action'
              >
                My Account
              </button>
            </ul> */}
          </div>
        </nav>
      </div>

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
    </div>
  );
};
export default Landing;

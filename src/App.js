import React from 'react';
import './App.css';
function App() {
  const [authPage, setAuthPage] = React.useState(true);
  const [register, setRegister] = React.useState(true);
  return (
    <div>
      <div className='navbar-fixed'>
        <nav>
          <div className='nav-wrapper menu'>
            <a href='#' className='brand-logo'>
              Greetings
            </a>
            <ul id='nav-mobile' className='right hide-on-med-and-down'>
              <li>
                <button
                  onClick={() => setAuthPage(() => !register)}
                  data-target='modal1'
                  className='account btn '
                  type='submit'
                  name='action'
                >
                  My Account
                </button>
                {authPage}
              </li>
            </ul>
          </div>
        </nav>
      </div>
      {authPage ? (
        <>
          <p className='logintext'>
            {register ? 'Create Your Account' : 'Access your account'}
          </p>
          <form>
            <div className='input-field col s6'>
              <input id='email' type='text' className='validate' />
              <label for='email'>Email Address</label>
            </div>
            <div className='input-field col s6'>
              <input id='password' type='password' className='validate' />
              <label for='password'>Password</label>
            </div>
            {register ? (
              <>
                <div className='input-field col s6'>
                  <input id='cpassword' type='password' className='validate' />
                  <label for='cpassword'>Confirm Password</label>
                </div>
                <div class='input-field col s6'>
                  <input id='name' type='text' className='validate' />
                  <label for='name'>Name</label>
                </div>
                <div className='input-field col s6'>
                  <input type='text' id='date' className='validate' />
                  <label for='date'>Date of Birth</label>
                </div>
              </>
            ) : (
              <></>
            )}

            <div className='submitbtn'>
              <button
                class='btn waves-effect waves-light'
                type='submit'
                name='action'
              >
                {register ? 'Register' : 'Login'}
              </button>
              <div>
                <p
                  onClick={() => setRegister((register) => !register)}
                  className='logintext'
                >
                  {register
                    ? 'Already have an account?'
                    : "Don't Have account?"}
                </p>
              </div>
            </div>
          </form>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

export default App;

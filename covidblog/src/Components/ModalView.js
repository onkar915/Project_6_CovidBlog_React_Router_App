import React, { useState } from 'react';
import Modal from 'react-modal';
import './ModalView.css';
import { Button } from '@material-ui/core';
// import React from 'react';
// import './Login.css';
import { auth, provider } from '../firebase';
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../Reducer';
Modal.setAppElement('#root');
function ModalView() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [state, dispatch] = useStateValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);

        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className='modal'>
      <button onClick={() => setModalIsOpen(true)}>SignIn</button>
      <Modal
        className=' modal_one'
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
      >
        <div className='login'>
          <div className='login__container'>
            <h3>Sign in</h3>

            <form>
              <h5>Email</h5>
              <input
                //   value={email}
                //   onChange={(event) => setEmail(event.target.value)}
                type='email'
              />
              <h5>Password</h5>
              <input
                //   value={password}
                //   onChange={(event) => setPassword(event.target.value)}
                type='password'
              />
              <button
                //   onClick={login}
                type='submit'
                className='login__signInButton'
              >
                Sign in
              </button>
            </form>

            <p>By signing-in you agree to the CovidSafe Conditions of Use.</p>
            <button className='login__registerButton'>
              Create Your Account
            </button>
          </div>
        </div>
        {/* <button onClick={() => setModalIsOpen(false)}>Okay!</button> */}
        <div className='btn'>
          <Button onClick={signIn}>
            <img src='https://img.icons8.com/fluent/48/000000/google-logo.png' />
          </Button>
          <Button>
            <img src='https://img.icons8.com/fluent/48/000000/facebook-new.png' />
          </Button>
        </div>
      </Modal>
    </div>
  );
}

export default ModalView;

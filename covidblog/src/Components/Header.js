import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';

import { Avatar, Button } from '@material-ui/core';

// import { useStateValue } from '../StateProvider';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Link } from 'react-router-dom';
import { auth } from '../firebase';
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../Reducer';
import ModalView from './ModalView';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import About from './About';
function Header() {
  const [{ state, user }, dispatch] = useStateValue();

  // const signIn = () => {
  //   auth
  //     .signInWithPopup(provider)
  //     .then((result) => {
  //       console.log(result);

  //       dispatch({
  //         type: actionTypes.SET_USER,
  //         user: result.user,
  //       });
  //     })
  //     .catch((error) => alert(error.message));
  // };

  // const signOut = () => {
  //   if (user) {
  //     auth.signOut();
  //   }
  // };

  const notify = (e) => {
    e.preventDefault();
    toast('🦄 Please Signin!', {
      position: 'top-center',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div className='header'>
      <div className='header__left'>
        <img
          src='https://www.humachallenge.com/croppedImages/Logos/COVID-Safe-Badge-679891-500px.jpg'
          alt=''
        />

        <div className='header__center'>
          <Link to='/About' className='header__option '>
            <h2>About</h2>
          </Link>
          <Link
            to='/Blog'
            className='header__option'
            // onClick={() => (user ? '' :'' )}
          >
            <h2 onClick={user ? '' : notify}> Blog</h2>
            <ToastContainer />
            {/* Same as */}
            <ToastContainer />
          </Link>
          <Link to='/TrackCases' className='header__option'>
            <h2>Track Cases</h2>
          </Link>
          <Link to='/Videos' className='header__option'>
            <h2>Videos</h2>
          </Link>

          <Link to='/Contact' className='header__option'>
            <h2>Contact</h2>
          </Link>
        </div>

        <div className='header__input'>
          <SearchIcon />
          <input placeholder='Search ...' />
        </div>
      </div>
      <div className='header__right'>
        {user ? (
          //yes
          <div className='header__info'>
            <Avatar src={user.photoURL} />
            <h4>{user.displayName}</h4>
            <Button onClick={''}>Sign Out</Button>
          </div>
        ) : (
          //no
          <div className='signin'>
            <ExitToAppIcon />
            {/* <Button type='submit' onClick={signIn}>
              SIGN IN
            </Button> */}
            <ModalView />
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;

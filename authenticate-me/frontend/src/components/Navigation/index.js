import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Modal } from '../../context/Modal';
import LoginForm from '../LoginForm';
import SignupForm from '../SignupForm';
import ProfileButton from './ProfileButton';
import './Navigation.css';


function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);
  const [showLogInModal, setShowLogInModal] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  
  let sessionLinks = (
      <ProfileButton 
        isLoaded={isLoaded}
        setShowLogInModal={setShowLogInModal}
        setShowSignUpModal={setShowSignUpModal}
      />
  )

  return (
    <nav>
      <ul>
        <li>
          <NavLink exact to="/">Home</NavLink>
          {isLoaded && sessionLinks}
        </li>
      </ul>
      {showLogInModal && (
        <Modal onClose={() => setShowLogInModal(false)}>
          <LoginForm setShowLogInModal={setShowLogInModal} />
        </Modal>
      )}
      {showSignUpModal && (
        <Modal onClose={() => setShowSignUpModal(false)}>
          <SignupForm setShowSignUpModal={setShowSignUpModal} />
        </Modal>
      )}
    </nav>
    
  );
}

export default Navigation;
import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { NavLink, useHistory } from "react-router-dom";
import * as sessionActions from '../../store/session';
// import LoginFormModal from "../LoginFormModal";


function ProfileButton( {isLoaded, setShowLogInModal, setShowSignUpModal} ) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const user = useSelector(state => state.session.user);
  const history = useHistory();

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };
  
  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);
  
    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    history.push('/')
  };

  let dropDown;
  if (isLoaded && !user) {
    dropDown = (
      <div>
        <button onClick={()=>setShowLogInModal(true)}>Log In</button>
        <button onClick={()=>setShowSignUpModal(true)}>Sign Up</button>
      </div>
    )
  } else if(isLoaded && user) {
    dropDown = (
      <ul className="profile-dropdown">
        <li>{user.username}</li>
        <li>{user.email}</li>
        <li>
          <button onClick={logout}>Log Out</button>
        </li>
      </ul>
    )
  }

  return (
    <>
      <button onClick={openMenu}>
        <i className="fas fa-user-circle" />
      </button>
      {showMenu && dropDown}
    </>
  );
}

export default ProfileButton;
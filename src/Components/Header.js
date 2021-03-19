import React from 'react';
import '../Css/Header.css';

import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import SettingsIcon from '@material-ui/icons/Settings';
import AppsIcon from '@material-ui/icons/Apps';

import { Avatar, IconButton } from '@material-ui/core';
import { logout, selectUser } from '../features/userSlice';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { auth } from '../firebase';

function Header() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const signOut = () => {
    auth.signOut().then(() => {
      dispatch(logout());
    });
  };

  return (
    <div className="header">
      <div className="header__left">
        <IconButton>
          <MenuIcon />
        </IconButton>

        <img
          src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_2x_r2.png"
          alt=""
        />
      </div>
      <div className="header__middle">
        <IconButton>
          <SearchIcon />
        </IconButton>

        <input type="text" placeholder="Search mail" />

        <IconButton>
          <ArrowDropDownIcon />
        </IconButton>
      </div>
      <div className="header__right">
        <IconButton>
          <HelpOutlineIcon />
        </IconButton>

        <IconButton>
          <SettingsIcon />
        </IconButton>

        <IconButton>
          <AppsIcon />
        </IconButton>

        <IconButton>
          <Avatar onClick={signOut} src={user?.photoUrl} />
        </IconButton>
      </div>
    </div>
  );
}

export default Header;

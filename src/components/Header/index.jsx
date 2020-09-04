import React from "react";

import SearchIcon from "@material-ui/icons/Search";
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SupervisorAccountOutlinedIcon from '@material-ui/icons/SupervisorAccountOutlined';
import HomeIcon from '@material-ui/icons/Home';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import AddIcon from '@material-ui/icons/Add';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ForumIcon from '@material-ui/icons/Forum';

import { Avatar, IconButton } from '@material-ui/core'

import "./index.css";

function index() {
  return (
    <div className="header">
      <div className="header__left">
        <img
          alt="facebook"
          src="https://1.bp.blogspot.com/-S8HTBQqmfcs/XN0ACIRD9PI/AAAAAAAAAlo/FLhccuLdMfIFLhocRjWqsr9cVGdTN_8sgCPcBGAYYCw/s1600/f_logo_RGB-Blue_1024.png"
        />
        <div className="header__input">
          <SearchIcon />
          <input placeholder='Search facebook' type="text" />
        </div>
      </div>
      <div className="header__middle">
        <div className='header__option header__option--active'>
          <HomeIcon fontSize='large'/>
        </div>
        <div className='header__option'>
          <FlagIcon fontSize='large'/>
        </div>
        <div className='header__option'>
          <SubscriptionsOutlinedIcon fontSize='large'/>
        </div>
        <div className='header__option'>
          <StorefrontOutlinedIcon fontSize='large'/>
        </div>
        <div className='header__option'>
          <SupervisorAccountOutlinedIcon fontSize='large'/>
        </div>
      </div>
      <div className="header__right">
        <div className='header__info'>
          <Avatar />
          <h4>asdasdas</h4>
        </div>
        <IconButton>
          <AddIcon />
        </IconButton>
        <IconButton>
          <ForumIcon />
        </IconButton>
        <IconButton>
          <NotificationsActiveIcon />
        </IconButton>
        <IconButton>
          <ExpandMoreIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default index;

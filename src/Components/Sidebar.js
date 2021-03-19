import React from 'react';
import '../Css/Sidebar.css';
import SidebarOptions from './SidebarOptions';

import { Button, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

import InboxIcon from '@material-ui/icons/Inbox';
import StarIcon from '@material-ui/icons/Star';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import SendIcon from '@material-ui/icons/Send';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import PersonIcon from '@material-ui/icons/Person';
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import PhoneIcon from '@material-ui/icons/Phone';
import { useDispatch } from 'react-redux';
import { openSendMessage } from '../features/mailSlice';

import VideocamIcon from '@material-ui/icons/Videocam';
import KeyboardHideIcon from '@material-ui/icons/KeyboardHide';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

function Sidebar() {
  const dispatch = useDispatch();

  return (
    <div className="sidebar">
      <Button
        startIcon={<AddIcon fontSize="large" />}
        className="sidebar__compose"
        onClick={() => dispatch(openSendMessage())}
      >
        Compose
      </Button>
      <SidebarOptions
        Icon={InboxIcon}
        title="Inbox"
        number={200}
        selected={true}
      />
      <SidebarOptions Icon={StarIcon} title="Starred" number={'Starred'} />

      <SidebarOptions
        Icon={WatchLaterIcon}
        title="Snoozed"
        number={'Snoozed'}
      />

      <SidebarOptions
        Icon={LabelImportantIcon}
        title="Important"
        number={'Important'}
      />

      <SidebarOptions Icon={SendIcon} title="Sent" number={'Sent'} />

      <SidebarOptions
        Icon={InsertDriveFileIcon}
        title="Draft"
        number={'Draft'}
      />
      <SidebarOptions Icon={ExpandMoreIcon} title="More" number={'More'} />
      <div className="sidebar__meeting">
        <h4>Meet</h4>
        <SidebarOptions
          Icon={VideocamIcon}
          title="New meeting"
          number={'New meeting'}
        />

        <SidebarOptions
          Icon={KeyboardHideIcon}
          title="Join a meeting"
          number={'Join a meeting'}
        />
      </div>

      <div className="sidebar__hangout">
        <h4>Hangouts</h4>
        <p>
          <AccountCircleIcon /> Tefera A Asega
        </p>
      </div>
      <div className="sidebar__footer">
        <div className="sidebar__footerIcon">
          <IconButton>
            <PersonIcon />
          </IconButton>

          <IconButton>
            <FormatQuoteIcon />
          </IconButton>

          <IconButton>
            <PhoneIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;

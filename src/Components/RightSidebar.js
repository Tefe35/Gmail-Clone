import React from 'react';
import '../Css/RightSidebar.css';
import AddIcon from '@material-ui/icons/Add';

function RightSidebar() {
  return (
    <div className="RightSidebar">
      <img
        src="https://cdn4.iconfinder.com/data/icons/logos-brands-in-colors/48/google-calendar-512.png"
        alt=""
      />
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Google_Keep_icon_%282020%29.svg/1200px-Google_Keep_icon_%282020%29.svg.png"
        alt=""
      />
      <img
        src="https://www.androidpolice.com/wp-content/uploads/2018/03/nexus2cee_new-tasks-icon.png"
        alt=""
      />
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Google_Contacts_icon.svg/1200px-Google_Contacts_icon.svg.png"
        alt=""
      />
      <hr />
      <AddIcon />
    </div>
  );
}

export default RightSidebar;

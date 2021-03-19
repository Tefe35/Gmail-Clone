import React, { useState } from 'react';
import '../Css/EmailRow.css';

import { Checkbox, IconButton } from '@material-ui/core';
import StarBorderOutlineIcon from '@material-ui/icons/StarOutline';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';

import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { selectMail } from '../features/mailSlice';

function EmailRow({ id, title, subject, description, time }) {
  const history = useHistory();
  const dispatch = useDispatch();

  const [star, setStar] = useState();
  const [label, setLabel] = useState();

  const openMail = () => {
    dispatch(
      selectMail({
        id,
        title,
        subject,
        description,
        time,
      })
    );
    history.push('/mail');
  };

  return (
    <div className="emailRow">
      <Checkbox />
      <IconButton onClick={() => (star ? setStar(false) : setStar(true))}>
        {star ? (
          <StarBorderOutlineIcon htmlColor="#f7cb69" />
        ) : (
          <StarBorderOutlineIcon />
        )}
      </IconButton>
      <IconButton onClick={() => (label ? setLabel(false) : setLabel(true))}>
        {label ? (
          <LabelImportantIcon htmlColor="#f7cb69" />
        ) : (
          <LabelImportantIcon />
        )}
      </IconButton>

      <div onClick={openMail} className="emailRow__options">
        <h3 className="emailRow__title">{title}</h3>
        <p className="emailRow__message">
          <h4>
            {subject}-
            <span className="emailRow__description">{description}</span>
          </h4>
        </p>
      </div>
      <p className="emailRow__time">{time}</p>
    </div>
  );
}

export default EmailRow;

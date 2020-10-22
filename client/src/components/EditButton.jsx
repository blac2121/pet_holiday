import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEdit } from "@fortawesome/free-solid-svg-icons";

const editPencil =
  <FontAwesomeIcon
    icon={faEdit}
    size="2x"
    color="#DAAB5E"
  />

const EditButton = () => <div>{editPencil}</div>


export default EditButton;
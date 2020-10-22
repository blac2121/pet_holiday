import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const deleteTrash =
  <FontAwesomeIcon
    icon={faTrashAlt}
    size="2x"
    color="#CDCCCF"
  />

const DeleteContainer = styled.div`
  cursor: pointer;
`

const DeleteButton = (props) => {

  return (
    <DeleteContainer onClick={props.onClick}>{deleteTrash}</DeleteContainer>
  )
  
}

export default DeleteButton;
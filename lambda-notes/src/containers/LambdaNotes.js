import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';''

const HeaderStyle = styled.h3`
  border-bottom: 1px solid black;
  width: 80%;
  padding-bottom: 5px;
`

const NotesContainer = styled.div`
  width: 25%;
  height: 230px;
  padding-left: 20px;
  border: 1px solid #979797
`

const LambdaNotes = (props) => {
    return(
        <NotesContainer>
        {props.notes.map(note => {
            return(
            <div key={note.id}>
            <HeaderStyle>{note.title}</HeaderStyle>
            <p>{note.body}</p>
            </div>
            )
        })}
        </NotesContainer>
    )
}   

export default LambdaNotes;
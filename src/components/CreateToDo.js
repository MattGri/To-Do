import styled from "styled-components";
import { connect } from "react-redux";
import { addToDo } from "../redux/actions/toDoActions";
import React, { useState, useEffect, useRef } from "react";
import ToDoList from "./ToDoList";

const FormParent = styled.form`
  background-color: #141623;
  width: 490px;
  margin: 0 auto;
  height: auto;
  padding-bottom: 30px;

  @media(max-width: 500px){
   
    width: 90%;
    margin-bottom: 30px;
  }
`;

const Title = styled.h1`
  color: #fff;
  padding-top: 30px;
  text-align: center;
  margin-bottom: 35px;
`;

const Description = styled.input`
  background-color: #141623;
  border: 3px solid #590cfc;
  padding: 15px 0px 15px 15px;
  color: #fff;

  ::placeholder {
    color: #fff;
  }

  :focus {
    outline: none;
  }

`;

const AddToDo = styled.button`
  cursor: pointer;
  color: #fff;
  background-color: #590cfc;
  border: none;
  padding: 18px 15px;
`;

const DivParent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`;

const CreateToDo = ({ addToDoStore }) => {
  const [description, setDescription] = useState("");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, [description])
  
  const addNewToDo = (e) => {
    e.preventDefault();

     if(description === ''){
      return alert('You need to write something :)');
     }
  
    const toDo = {
      description: description,
    };

    addToDoStore(toDo);

    setDescription('');
  };



 
  return (
    <FormParent>
      <Title>What's the Plan for Today?</Title>
      <DivParent>
        <Description type="text" placeholder="Add a todo" value={description} onChange={e => setDescription(e.target.value)} ref={inputRef}/>
        <AddToDo onClick={addNewToDo}>Add Todo</AddToDo>
      </DivParent>
      <ToDoList />
       
    </FormParent>
  );
};

const dispatchToProps = (dispatch) => ({
  addToDoStore: (toDo) => dispatch(addToDo(toDo))
});

export default connect(null, dispatchToProps)(CreateToDo);

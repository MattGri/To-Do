import styled from "styled-components";
import { connect } from "react-redux";
import { addToDo } from "../redux/actions/toDoActions";
import { useState } from "react";

const FormParent = styled.form`
  background-color: #141623;
  width: 490px;
  margin: 0 auto;
  height: 90vh;
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
`;

const CreateToDo = () => {
  return (
    <FormParent>
      <Title>What's the Plan for Today?</Title>
      <DivParent>
        <Description type="text" placeholder="Add a todo" />
        <AddToDo>Add Todo</AddToDo>
      </DivParent>
    </FormParent>
  );
};

export default CreateToDo;

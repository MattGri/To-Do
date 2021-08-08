import styled from 'styled-components';
import { connect } from "react-redux";
import { deleteTodo } from "../redux/actions/toDoActions";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const DivParent = styled.div`
    background-color: #1380ff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0px auto 10px auto;
    height: 50px;
    width: 90%;
    border-radius: 10px;
`

const Text = styled.p`
    color: #fff;
    margin-left: 15px;
`

const DeleteIcon = styled(FontAwesomeIcon)`
    cursor: pointer;
    margin-right: 20px;
`

const ToDoList = ({ toDo, deleteToDoFromStore }) => {

    

    const deleteToDo = toDo => {
        deleteToDoFromStore(toDo);
    }
    return(
    <>
        {toDo.map(toDo => <DivParent> <Text>{toDo.description}  </Text> <DeleteIcon icon='times-circle' onClick={() => deleteToDo(toDo)}/> </DivParent>)}  
    </>  
    )
}

const mapStateToProps = store => ({
    toDo: store.toDo
})

const mapDispatchToProps = dispatch => ({
    deleteToDoFromStore: toDo => dispatch(deleteTodo(toDo))
})


export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);
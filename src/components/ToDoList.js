import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { todosList, deleteTodo } from '../redux/todo/todoSlice';
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

const ToDoList = () => {

    const todos = useSelector(todosList)
    
    const dispatch = useDispatch();

    const deleteToDos = (todo) => {
        dispatch(deleteTodo(todo))
    }
 
    return(
    <>
        {todos.map(toDo => <DivParent> <Text>{toDo.description}  </Text> <DeleteIcon icon='times-circle' onClick={() => deleteToDos(toDo)}/> </DivParent>)}  
    </>  
    )
}


export default ToDoList;
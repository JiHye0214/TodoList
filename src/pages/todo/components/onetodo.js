import styled from "styled-components"
import { useRef, useState } from "react"
import { flexCenter } from "../../../styles/common";

const OneTodo = ({todo, editMode, handleDeleteBTN, handleEditTodo}) => {
    const [menuState, setMenuState] = useState(false);
    const [editModeState, setEditModeState] = useState(editMode);

    const TodoTitle = useRef(null);
    const TodoContent = useRef(null);

    const onClickTodoState = () => {
        handleEditTodo(todo.id, {state : !todo.state})
    }

    const onClickHamb = () => {
        setMenuState((prev) => !prev)
    }

    // 수정
    const onClickEditBTN = () => {
        setEditModeState(true)
        setMenuState(false)
    }

    const onClickFinBTN = () => {
        setEditModeState(false)
        todo.title = TodoTitle.current.value;
        todo.content = TodoContent.current.value;
    }

    // 삭제
    const onClickDeleteBTN = () => {
        if(window.confirm("삭제하시겠습니까?")){
            handleDeleteBTN(todo.id);
        }
    }

    return(
        <Wrapper state = {todo.state}>
            <Container>
                <Header onClick={onClickTodoState}>
                    <TodoState state = {todo.state}>{editModeState ? <TodoText defaultValue={todo.title} ref={TodoTitle}></TodoText> : todo.title}</TodoState>
                    <TodoState state = {todo.state}>{editModeState ? <TodoText defaultValue={todo.content} ref={TodoContent}></TodoText> : todo.content}</TodoState>
                </Header>
                <Body>
                    <Hamburger>
                        <HambugMenu onClick={onClickHamb}>☰</HambugMenu>
                        <HambugContainer state={menuState}>
                            <Menu onClick={onClickEditBTN}>modify</Menu>
                            <Menu onClick={onClickDeleteBTN}>delete</Menu>
                        </HambugContainer>
                    </Hamburger>
                    <FinBTN state = {editModeState} onClick={onClickFinBTN}>FIN</FinBTN>
                </Body>
            </Container>
        </Wrapper>
    )
}

export default OneTodo

const Wrapper = styled.div`
    background-color: ${({state}) => (state ? "lightgreen" : "pink")};
    width: 100%;
    height: 100px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 10px;
`

const Container = styled.div`
    padding: 20px;
    display: flex;
    justify-content: space-between;
`

const Header = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`

const TodoState = styled.div`
    text-decoration: ${({state}) => (state ? "line-through" : "none")};
    padding: 5px;
    overflow: hidden;
`

const TodoText = styled.textarea`
    height: 18px;
    width: 300px;
    border: none;
`

const Body = styled.div`
    ${flexCenter}
    flex-direction: column;
`

// hamburger menu
const Hamburger = styled.div`
`

const HambugContainer = styled.div`
    position: absolute;
    transform: translateX(20%);

    background-color: lightblue;
    padding: 7px;
    border-radius: 7px;

    display: ${({state}) => (state ? "block" : "none")};
`

const HambugMenu = styled.div`
    &:hover{
        cursor: pointer;
    }
    padding: 5px;
`

const Menu = styled.div`
    padding: 5px;
    margin-bottom: 5px;
    &:hover{
        cursor: pointer;
        color: red;
    }
`
 
const FinBTN = styled.button`
    padding: 5px;
    opacity: ${({state}) => (state ? "1" : "0")};
`
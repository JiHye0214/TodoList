import styled from "styled-components"
import { flexCenter } from "../../styles/common"
import Todolist from "./components/todolist"
import TDButton from "../../components/button";
import { useState } from "react";
import AddTodoModal from "./components/addTodoModal";

const TodoPage = () => {

    // TODO : add button 구현 / 삭제 구현
    // 근데 나 1116일은 힘들어 왜냐면 미용실도 가고 치과도 가고 신림에 혼자 찍으러 가고 신대방 엽떡 픽업도 했어
    // 한 번만 이렇게 하고 넘어가자 나 힘드러
    // 내일은 증말 열심히 할게
    // 오늘 강의 너무 집중할 내용이 많아서 3시간 딱 걸린 듯
    // 아침에 했으면 참 좋았겠지만
    // 어느 누가 9시 반에 일어나는 바람에 
    // 로키나 보면서 밥이나 처먹고 놀다 나가고
    // 하지만 머리 마음에 들기 때문에 만족스러움 ㅋ
    // 씻으러 가께 내일의 나야 잘부탁해


    const editMode = false;
    const [addModalState, setAddModalState] = useState(false);

    // ⭐⭐⭐ 배열이 바뀔 때마다 리렌더하므로
    // 그냥 배열 자체에다가 useState 걸면 됨 

    const [todos, setTodos] = useState([
        {
            id : 1,
            title : "title1",
            content : "content1",
            state : false,
        },
        {
            id : 2,
            title : "title2",
            content : "content2",
            state : true,
        },
        {
            id : 25,
            title : "title25",
            content : "content25",
            state : true,
        },
        {
            id : 258,
            title : "title259",
            content : "content258",
            state : true,
        },
    ])

    // 삭제를 여기서 구현해야지 
    // 내가 클릭한 todo의 id를 찾기 위해서!
    // ⭐⭐⭐ filter 사용법 익히고 , todos state 걸기
    const HandleDeleteBTN = (id) => {
        const deleteTodos = todos.filter((todos) => todos.id !== id)
        setTodos(deleteTodos);
    }

    // ⭐⭐⭐ 여는 함수랑 닫는 함수를 만들어서 닫는 함수만 modal창에 넘겨주기
    const onClickAddBTN = () => {
        setAddModalState(true)
        console.log(addModalState)
    }
    const onCloseAddBTN = () => {
        setAddModalState(false)
    }


    // ⭐⭐⭐ 추가는 push가 아니라 객체 생성 후 setTodos
    const handleAddTodo = (title, content) => {
        const newTodo = {
            id : Math.random(Math.random() * 100000), 
            title, 
            content, 
            state : false };

        setTodos((prev) => [newTodo, ...prev])
    }

    const handleEditTodo = (id, todo) => {
        const _todos = [...todos]
        let selectTodoIndex = _todos.findIndex((todo) => todo.id === id)
        _todos[selectTodoIndex] = {...todos[selectTodoIndex], ...todo}
        setTodos(_todos)
    }

    return (
        <>
        {addModalState && (<AddTodoModal {...{onCloseAddBTN, handleAddTodo}}/>)}{" "}
        <Wrapper>
            <Container>
                <h2>MY TODO LIST</h2>
                <Todolist todos={todos} editMode={editMode} {...{HandleDeleteBTN, handleEditTodo}}/>
                <TDButton variant={"primary"} size={"full"}>
                    <h3 onClick={onClickAddBTN} {...{addModalState}}>ADD</h3>
                </TDButton>
            </Container>
        </Wrapper>
        </>
    )
}

export default TodoPage

const Wrapper = styled.div`
    height: calc(100vh - 240px);
    width: 100%;
    ${flexCenter}
    flex-direction: column;
`
const Container = styled.div`
  width: 400px;
  height: 600px;
  padding : 20px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  position: relative;
  flex-direction : column;
  ${flexCenter};
`;
import styled from "styled-components"
import OneTodo from "./onetodo"

const Todolist = ({todos, editMode, HandleDeleteBTN, handleEditTodo}) => {
    
    return (
        <Wrapper>
            {/* map에서 전달할 때도 중괄호가 아니라 소괄호임! */}
            {/* 하나의 todo, index 전달 */}
            {/* 사실 OneTodo에서 index 필요 없는데 map에서는 key값 있어야 에러 안 남 */}
            {todos.map((todo, index) => (
                <OneTodo key={index} todo={todo} editMode={editMode} {...{HandleDeleteBTN, handleEditTodo}}/>
            ))}
        </Wrapper>
    )
}

export default Todolist

const Wrapper = styled.div`
    width: 100%;
    height: 590px;
    margin-bottom: 20px;
    background-color: white;
    overflow: scroll;
    &::-webkit-scrollbar {
        display: none;
    }
    flex-direction: column;
`
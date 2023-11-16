import styled from "styled-components"
import { flexCenter } from "../../styles/common"
import Todolist from "./components/todolist"
import TDButton from "../../components/button";

const TodoPage = () => {

    // TODO : add button 구현 / 삭제 구현
    // 근데 나 1116일은 힘들어 왜냐면 미용실도 가고 치과도 가고 신림에 혼자 찍으러 가고 엽떡 픽업도 했어
    // 한 번만 이렇게 하고 넘어가자 나 힘드러
    // 내일은 증말 열심히 할게
    // 오늘 강의 너무 집중할 내용이 많아서 3시간 딱 걸린 듯
    // 아침에 했으면 참 좋았겠지만
    // 어느 누가 9시 반에 일어나는 바람에 
    // 로키나 보면서 밥이나 처먹고 놀다 나가고
    // 하지만 머리 마음에 들기 때문에 만족스러움 ㅋ
    // 씻으러 가께 내일의 나야 잘부탁해

    const editMode = false;

    const todos = [
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
    ]

    return (
        <Wrapper>
            <Container>
                <h2>MY TODO LIST</h2>
                <Todolist todos={todos} editMode={editMode}/>
                <TDButton variant={"primary"} size={"full"}>
                    <h3>ADD</h3>
                </TDButton>
            </Container>
        </Wrapper>
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
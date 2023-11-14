import styled from "styled-components"
import { flexCenter } from "../../styles/common"
import Todolist from "./components/todolist"
import TDButton from "../../components/button";

const TodoPage = () => {

    return (
        <Wrapper>
            <Container>
                <h2>MY TODO LIST</h2>
                <Todolist/>
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
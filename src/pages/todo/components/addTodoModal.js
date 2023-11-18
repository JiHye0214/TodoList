import styled from "styled-components";
import { flexCenter } from "../../../styles/common";
import TDButton from "../../../components/button";

const AddTodoModal = ({onCloseAddBTN, handleAddTodo}) => {

    const onAddTodo = (e) => {
        e.preventDefault()
        handleAddTodo(e.target.title.value, e.target.content.value)
        onCloseAddBTN()
    }

    return (
        <Wrapper>
            <Container>
                <Header>
                    <h1>Add Your Todo</h1>
                    <AddTodoCloseBTN onClick={onCloseAddBTN}>X</AddTodoCloseBTN>
                </Header>
                <Form onSubmit={onAddTodo}>
                    <h3>Title</h3><input type="text" name="title"></input>
                    <h3>Content</h3><textarea name="content"></textarea>
                    <TDButton variant={"primary"} size={"full"}>
                        ADD
                    </TDButton>
                </Form>
            </Container>
        </Wrapper>
    )
}

export default AddTodoModal;

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(224, 224, 224, 0.7);
  z-index: 1000;
`; 

const Container = styled.div`
  width: 480px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  padding: 32px;
`

const Header = styled.div`
    ${flexCenter}
    justify-content: space-between;
`

const AddTodoCloseBTN = styled.h1`
    &:hover{
        cursor: pointer;
    }
`

const Form = styled.form`
    display: flex;

    flex-direction: column;
    margin-bottom: 30px;
`
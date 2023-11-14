import styled from "styled-components"

const Todolist = () => {
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
            
        </Wrapper>
    )
}

export default Todolist

const Wrapper = styled.div`
    background-color: pink;
    overflow: scroll;
    &::-webkit-scrollbar {
        display: none;
    }
`
import styled from "styled-components"
import { flexCenter } from "../styles/common"

const Header = () => {
    return (
        <Wrapper>
            <h1>Header</h1>
        </Wrapper>
    )
}

export default Header

const Wrapper = styled.div`
    background-color: lightblue;
    height: 120px;
    width: 100%;
    ${flexCenter}
`
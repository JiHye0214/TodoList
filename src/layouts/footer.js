import styled from "styled-components"
import { flexCenter } from "../styles/common"

const Footer = () => {
    return (
        <Wrapper>
            <h1>Footer</h1>
        </Wrapper>
    )
}

export default Footer

const Wrapper = styled.div`
    background-color: lightblue;
    height: 120px;
    width: 100%;
    ${flexCenter}
`
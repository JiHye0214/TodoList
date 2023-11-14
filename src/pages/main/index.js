import styled from "styled-components"
import { flexCenter } from "../../styles/common"
const MainPage = () => {

    return (
        <Wrapper>
            <h2>main page</h2>
        </Wrapper>
    )
}

export default MainPage

const Wrapper = styled.div`
    height: calc(100vh - 240px);
    width: 100%;
    ${flexCenter}
`
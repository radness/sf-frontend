import styled from "@emotion/styled";
import {ReactNode} from "react";
import {Header} from "../../component/Header";
import {Sidebar} from "../../component/Sidebar";
import {Footer} from "../../component/Footer";

const Container = styled.header`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;

const Content = styled.main`
    display: flex;
    flex: 1;
`;

const Main = styled.main`
    flex: 1;
    padding: 20px;
`;

interface Props {
    children: ReactNode;
}

export const Layout = (props: Props) => {
    return (
        <Container>
            <Header/>
            <Content>
                <Sidebar/>
                <Main>{props.children}</Main>
            </Content>
            <Footer/>
        </Container>
    );
};
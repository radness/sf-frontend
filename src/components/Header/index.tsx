import styled from "@emotion/styled";

const Container = styled.header`
    background-color: #369bd3;
    color: aliceblue;
    padding: 20px;
`;

const Logo = styled.img`
    width: 150px;
`;

const Nav = styled.nav`
    margin-top: 0px;
`;

const NavLink = styled.a`
    color: aliceblue;
    text-decoration: none;
    margin-left: 10px;
    font-size: 16px;

    &:hover {
        Text-decoration: underline;
    }
`;

export const Header = () => {
    return (
        <Container>
            {/*<Logo src='https://via.placeholder.com/150' alt='logo'></Logo>*/}
            <Nav>
                <NavLink href="#">Home</NavLink>
                <NavLink href="#">About</NavLink>
                <NavLink href="#">Services</NavLink>
                <NavLink href="#">Contact</NavLink>
            </Nav>
        </Container>
    );
};





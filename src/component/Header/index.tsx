import styled from "@emotion/styled";

const Container = styled.header`
    display: flex;
    background-color: antiquewhite;
    color: azure;
    padding: 20px;
`;

const Logo = styled.img`
    width: 120px;
`;

const Nav = styled.nav`
    margin-top: 10px`
;

const NavLink = styled.a`
    color: azure;
    text-decoration: none;
    margin-left: 20px;
    font-size: 20px;

    &:hover {
        text-decoration: underline;
    }
`;

export const Header = () => {
    return (
        <Container>
            <Logo src='https://via.placeholder.com/150' alt='logo'/>
            <Nav>
                <NavLink href="/">Home</NavLink>
                <NavLink href="/">About</NavLink>
                <NavLink href="/">Services</NavLink>
                <NavLink href="/">Contact</NavLink>
            </Nav>
        </Container>
    );
};


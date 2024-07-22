import styled from "@emotion/styled";

const Container = styled.aside`
    background-color: #fafafa;
    padding: 20px;
`;

const Menu = styled.ul`
    list-style-type: none;
    padding: 0;
`;

const MenuItem = styled.li`
    margin-bottom: 10px;
`;

const MenuLink = styled.a`
    color: #fafafa;
    text-decoration: none;
    font-size: 10px;
    
    &hober {
        color: blue;
    }
`;

const Info = styled.div`
    margin-top: 10px;
`;

const InfoTitle = styled.h3`
    font-size: 20px;
    margin-bottom: 10px;
`;

const InfoText = styled.a`
    font-size: 16px
`;

export const Sidebar = () => {
    return (
        <Container>
            <Menu>
                <MenuItem>
                    <MenuLink href='#'>Home</MenuLink>
                </MenuItem>
                <MenuItem>
                    <MenuLink href='#'>About</MenuLink>
                </MenuItem>
                <MenuItem>
                    <MenuLink href='#'>Services</MenuLink>
                </MenuItem>
                <MenuItem>
                    <MenuLink href='#'>Contact</MenuLink>
                </MenuItem>
            </Menu>
            <Info>
                <InfoTitle>Follow Us</InfoTitle>
                <InfoText>Stay connected with us</InfoText>
            </Info>
        </Container>
    );
};
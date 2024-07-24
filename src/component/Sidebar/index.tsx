import styled from "@emotion/styled";
import {Link} from "react-router-dom";

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

const MenuLink = styled(Link)`
    color: #333;
    text-decoration: none;
    font-size: 16px;
    
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
                    <MenuLink to='/'>Home</MenuLink>
                </MenuItem>
                <MenuItem>
                    <MenuLink to='/about'>About</MenuLink>
                </MenuItem>
                <MenuItem>
                    <MenuLink to='/example1'>Services</MenuLink>
                </MenuItem>
                <MenuItem>
                    <MenuLink to='/example2'>Contact</MenuLink>
                </MenuItem>
            </Menu>
            <Info>
                <InfoTitle>Follow Us</InfoTitle>
                <InfoText>Stay connected with us</InfoText>
            </Info>
        </Container>
    );
};
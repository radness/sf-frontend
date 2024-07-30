import styled from "@emotion/styled";
import {Searchbar} from "./SearchBar";
import './SearchBar/SearchBar.css';
import {useState, useContext} from "react";

const Container = styled.header`
    display: flex;
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
    const [results, setResults] = useState([]);

    return (
        <Container>
            {/*<Logo src='https://via.placeholder.com/150' alt='logo'></Logo>*/}
            <div className='search-bar-container'>
                <Searchbar setResults={setResults} />
            </div>
            <Nav>
                <NavLink href="/">Home</NavLink>
                <NavLink href="/about">About</NavLink>
                <NavLink href="services">Services</NavLink>
                <NavLink href="/contact">Contact</NavLink>
            </Nav>
        </Container>
    );
};






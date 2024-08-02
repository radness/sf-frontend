import './header.css';
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import Nav from "./Nav";

export const Header = () => {
    return (
        <header id='header' className='header fixed-top d-flex align-items-center justify-content-between'>
            {/* logo */}
            <Logo/>
            {/* search bar */}
            <SearchBar/>
            {/* nav */}
            <Nav/>
        </header>
    );
};
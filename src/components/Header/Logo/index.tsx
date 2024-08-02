import React from 'react';
import './logo.css';

const handleToggleSideBar = () => {
    document.body.classList.toggle('toggle-sidebar');
};

const Logo = () => {
    return (
        <div className='d-flex align-items-center justify-content-between'>
            <a href='/' className='logo d-flex align-items-center'>
                {/*<img src='' alt='logo' />*/}
                <span className='d-none d-lg-block'>Radness</span>
            </a>
            <i className='bi bi-list toggle-sidebar-btn'
                onClick={handleToggleSideBar}
            >
            </i>
        </div>
    );
};

export default Logo;
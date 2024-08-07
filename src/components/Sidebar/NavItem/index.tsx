import React from 'react';

const NavItem = ({item} : {item:any}) => {
    return (
        <li className='nav-item' key={item._id}>
            <a className='nav-link collapsed' href='#'>
                <i className={item.icon}></i>
                <span>{item.name}</span>
            </a>
        </li>
    );
};

export default NavItem;
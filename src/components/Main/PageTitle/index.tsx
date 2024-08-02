import React from 'react';
import './page-title.css';

const PageTitle = ({page} : {page:any}) => {
    return (
        <div className='pagetitle'>
            <h1>{page}</h1>
            <nav>
                <ol className='breadcrumb'>
                    <li className='breadcrumb-item'>
                        <a href='/'>
                            <i className='bi bi-house-door'></i>
                        </a>
                    </li>
                    <li className='breadcrumb-item active'>Dashboard</li>
                </ol>
            </nav>
        </div>
    );
};

export default PageTitle;
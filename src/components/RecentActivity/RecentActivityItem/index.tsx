import React from 'react';

const RecentActivityItem = ({item} : {item : any}) => {
    return (
        <div className="activity-item d-flex">
            <div className="activity-label">{item.time}</div>
            <i className={`bi bi-circle-fill activity-bagde ${item.color} align-self-start`}></i>
            <div className="activity-content">{item.content}</div>
            {/*{item.highlight === '' ? (*/}
            {/*    <div className="activity-content">{item.content}</div>*/}
            {/*) : (*/}
            {/*    <div className="activity-content">*/}
            {/*        {item.content.substring(0, item.content.indexOf(item.hightlight))}*/}
            {/*        <a href="#" className="fw-bold text-dark">{item.hightlight}</a>*/}
            {/*        /!*{item.content.slice(*!/*/}
            {/*        /!*    item.content.indexOf(item.hightlight) + item.hightlight.length, - 1*!/*/}
            {/*        /!*)}*!/*/}
            {/*    </div>*/}
            {/*)}*/}
        </div>
    );
};

export default RecentActivityItem;
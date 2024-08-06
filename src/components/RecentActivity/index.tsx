import React, {useState, useEffect} from 'react';
import './recent-activity.css';
import CardFilter from "../Dashboard/CardFilter";
import RecentActivityItem from "./RecentActivityItem";

const RecentActivity = () => {
    const [items, setItems] = useState([]);
    const [filter, setFilter] = useState('Today');
    const handleFilterChange = (filter : string) => {
        setFilter(filter);
    }

    const fetchData = () => {
        fetch('http://localhost:4000/recentactivity')
            .then(res => res.json())
            .then(data => {
                setItems(data);
            })
            .catch(e => console.log(e.message));
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="card">
            <CardFilter filterChange={handleFilterChange} />

            <div className="card-body">
                <h5 className="card-title">
                    Recent Activity <span>| {filter}</span>
                </h5>

                <div className="activity">
                    {items && items.length > 0 &&
                    items.map(item => (
                        <RecentActivityItem key={item._id} item={item} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RecentActivity;
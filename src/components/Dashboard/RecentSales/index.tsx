import React, {useEffect} from 'react';
import './recent-sales.css';
import RecentSalesTable from "../RecentSalesTable/index";
import CardFilter from "../CardFilter";

const RecentSales = () => {
    const [items, setItems] = React.useState([]);
    const [filter, setFilter] = React.useState('Today');
    const handleFilterChange = (filter: React.SetStateAction<string>) => {
        setFilter(filter);
    }

    const fetchData = async () => {
        fetch('http://localhost:4000/recentsales')
            .then(res => res.json())
            .then(data => {setItems(data)})
            .catch(e => console.log(e.message));
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="card recent-sales overflow-auto">
            <CardFilter filterChange={handleFilterChange} />

            <div className="card-body">
                <h5 className="card-title">
                    Recent Sales <span>| {filter}</span>
                </h5>
                <RecentSalesTable items={items} />
            </div>
        </div>
    );
};

export default RecentSales;
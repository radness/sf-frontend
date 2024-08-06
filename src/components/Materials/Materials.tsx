import React, {useEffect} from 'react';
import MaterialsTable from "../MaterialsTable/MaterialsTable";

const Materials = () => {
    const [items, setItems] = React.useState([]);

    const fetchData = () => {
        fetch('http://localhost:8080/v3/materials')
            .then(res => res.json())
            .then(data => {setItems(data)})
            .catch(e => console.log(e.message));
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="card recent-sales overflow-auto">
            <div className="card-body">
                <h5 className="card-title">Materials</h5>
                <MaterialsTable items={items}/>
            </div>
        </div>
    );
};

export default Materials;
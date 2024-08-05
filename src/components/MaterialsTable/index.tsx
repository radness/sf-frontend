import React from 'react';

interface RecentSalesTableProps {
    items?: any[]
}

const MaterialsTable = ({items}: RecentSalesTableProps) => {
    const handleStatus = (materialType : string) => {
        switch (materialType) {
            case 'ROH':
                return 'success';
            case 'HALB':
                return 'warning';
            case 'FERT':
                return 'danger';
            default:
                return 'success';
        }
    };

    return (
        <table className="table table-borderless datatable">
            <thead className="table-light">
            <tr>
                <th scope="col">no</th>
                <th scope="col">factoryId</th>
                <th scope="col">materialId</th>
                <th scope="col">materialDescription</th>
                <th scope="col">qty</th>
                <th scope="col">Status</th>
                <th scope="col">unit</th>
                <th scope="col">vendorId</th>
                <th scope="col">customerId</th>
                <th scope="col">createUserId</th>
                <th scope="col">createDateTime</th>
                <th scope="col">updateUserId</th>
                <th scope="col">updateDateTime</th>
            </tr>
            </thead>
            <tbody className="table-body">
            {items && items.length > 0 &&
            items.map((item: any) => (
                <tr key={item.id}>
                    {/*<th scope="row">*/}
                    {/*    <a href={`#${item.id}`}>{item.number}</a>*/}
                    {/*</th>*/}
                    <td>{item.factoryId}</td>
                    <td>
                        <a href={"#"} className="text-primary">{item.materialId}</a>
                    </td>
                    <td>{item.materialDescription}</td>
                    <td>
                       <span className={`badge bg-${handleStatus(item.materialType)}`}>
                           {item.materialType}
                       </span>
                    </td>
                    <td>${item.qty}</td>
                    <td>{item.vendorId}</td>
                    <td>{item.customerId}</td>
                    <td>{item.createUserId}</td>
                    <td>{item.createDateTime}</td>
                    <td>{item.updateUserId}</td>
                    <td>{item.updateDateTime}</td>

                </tr>
            ))}
            </tbody>
        </table>
    );
};

export default MaterialsTable;
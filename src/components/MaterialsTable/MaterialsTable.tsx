import React from 'react';
// import PropTypes from 'prop-types';

interface MaterialsTableProp {
    items?: any[];
}

// interface MaterialsTableProp {
//     no: number,
//     factoryId: string,
//     materialId: string,
//     materialDescription: string,
//     materialType: string,
//     qty: number,
//     status: string,
//     unit: string,
//     vendorId: string,
//     customerId: string,
//     createUserId: string,
//     createDateTime: string,
//     updateUserId: string,
//     updateDateTime: string,
// }

const MaterialsTable = ({items}: MaterialsTableProp) => {
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
                <th scope="col">materialId</th>
                {/*<th scope="col">factoryId</th>*/}
                <th scope="col">materialDescription</th>
                <th scope="col">materialType</th>
                <th scope="col">qty</th>
                {/*<th scope="col">status</th>*/}
                <th scope="col">unit</th>
                <th scope="col">vendorId</th>
                <th scope="col">customerId</th>
                <th scope="col">createUserId</th>
                <th scope="col">createDateTime</th>
                {/*<th scope="col">updateUserId</th>*/}
                {/*<th scope="col">updateDateTime</th>*/}
            </tr>
            </thead>
            <tbody className="table-body">
            {items && items.length > 0 &&
            items.map((item: any) => (
                <tr key={item.materialId}>
                    <th scope="row">
                        <a href={`#${item.materialId}`}>{item.materialId}</a>
                    </th>
                    {/*<td>{item.factoryId}</td>*/}
                    <td>{item.materialDescription}</td>
                    <td>
                       <span className={`badge bg-${handleStatus(item.materialType)}`}>
                           {item.materialType}
                       </span>
                    </td>
                    <td>${item.qty}</td>
                    <td>${item.unit}</td>
                    <td>{item.vendorId}</td>
                    <td>{item.customerId}</td>
                    <td>{item.createUserId}</td>
                    <td>{item.createDateTime}</td>
                    {/*<td>{item.updateUserId}</td>*/}
                    {/*<td>{item.updateDateTime}</td>*/}

                </tr>
            ))}
            </tbody>
        </table>
    );
};

// MaterialsTable.propTypes = {
//     props: PropTypes.any
// };

export default MaterialsTable;
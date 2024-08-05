import React from 'react';

interface RecentSalesTableProps {
    items?: any[]
}

const RecentSalesTable = ({items}: RecentSalesTableProps) => {
    const handleStatus = (status : string) => {
        switch (status) {
            case 'Approved':
                return 'success';
            case 'Pending':
                return 'warning';
            case 'Rejected':
                return 'danger';
            default:
                return 'success';
        }
    };

    return (
        <table className="table table-borderless datatable">
            <thead className="table-light">
            <tr>
                <th scope="col">#</th>
                <th scope="col">Customer</th>
                <th scope="col">Product</th>
                <th scope="col">Price</th>
                <th scope="col">Status</th>
            </tr>
            </thead>
            <tbody className="table-body">
            {items && items.length > 0 &&
                items.map((item: any) => (
                    <tr key={item.id}>
                        <th scope="row">
                            <a href={`#${item.id}`}>{item.number}</a>
                        </th>
                        <td>{item.customer}</td>
                        <td>
                            <a href={"#"} className="text-primary">{item.product}</a>
                        </td>
                        <td>${item.price.toFixed(2)}</td>
                        <td>
                       <span className={`badge bg-${handleStatus(item.status)}`}>
                           {item.status}
                       </span>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default RecentSalesTable;
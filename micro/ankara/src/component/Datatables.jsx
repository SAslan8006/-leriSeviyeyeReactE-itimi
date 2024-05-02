import React from 'react'
import DataTable from 'react-data-table-component';

const Datatables = ({ columns, data }) => {
    return (
        <div>
            <DataTable
                columns={columns}
                data={data}
            />
        </div>
    )
}

export default Datatables

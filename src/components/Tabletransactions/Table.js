import React from 'react';
import { DataGrid } from '@mui/x-data-grid';



const columns = [
  {
    field: 'id',
    width: 70,
    headerName:'ID',
    sortable:false
  },  
  { field: 'name', headerName: 'Name', width: 130,sortable:false },
  { field: 'amount', headerName: 'Amount', width: 130,sortable:false },
  { field: 'date', headerName: 'Date', width: 130,sortable:true  },
  { field: 'time', headerName: 'Time', width: 130,sortable:true  },
  
];

const rows = [
  
];

export default function DataTable() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
}
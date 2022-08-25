import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';

const columns = [
    { field: 'id', headerName: 'ID', width: 70,sortable:false },  
  { field: 'products', headerName: 'Products', width: 130,sortable:false },
  { field: 'specifications', headerName: 'Specifications', width: 130,sortable:false  },
  { field: 'image', headerName: 'Image', width: 130,sortable:false  },
  
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
        checkboxSelection
      />
      <Button variant="contained" className='button'>Delete</Button>
    </div>
  );
}
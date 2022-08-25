import React from 'react'
import "./datatable.scss"
import { DataGrid } from '@mui/x-data-grid';
import Popup from '../Popup/Popup'

const columns = [
  { field: 'id', 
  headerName:'ID', 
  width: 70,
  sortable:false,
},
  { field: 'products', 
  headerName: 'Products', 
  width: 130 ,
  sortable:false
},
{ field: 'revenue', 
headerName: 'Revenue',
type: 'number',
width: 90, 

},
  {
    field: 'orders',
    headerName: 'Orders',
    type: 'number',
    width: 90,
    sortable:false
  },
  {
    field: 'sales',
    headerName: 'Sales',
    type: 'number',
    width: 80,
  },
  {
    field: ' outstandingOrders',
    headerName: 'Outstanding Orders',
    type: 'number',
    width: 130,
    sortable:false
  },
];

const rows = [
 {
  id:1,
  products:'lol',
  revenue:1,
  orders:1,
  sales:1,
  outstandingOrders:1
 }
];

const Datatable = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
   
    <div style={{ height: 400, width: '100%' }} className='datatable'>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        onCellClick={()=>setOpen(true)}
      />
      <Popup
      open={open}
      setOpen={setOpen}
      handleClose={handleClose}
      handleClickOpen={handleClickOpen}
      />
    </div>
    
   
  )
}

export default Datatable
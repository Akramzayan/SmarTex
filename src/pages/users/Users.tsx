import {useState} from 'react'
import { GridValueGetterParams,GridColDef } from '@mui/x-data-grid'
 import "./users.scss"
import DataTable from '../../components/dataTable/DataTable'
import { userRows } from '../../data'
import AddNewUser from '../../components/addNewUser/AddNewUser'
const Users = () => {
  const [open,setOpen] = useState(false)
  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
  
    {
        field:"img",
        headerName:'Avatar',
        width:100,
        renderCell:(params) => {
            return<img src={params.row.img || "/noavatar.png"}alt=""/>
        }
    },
 
    {
      field: 'firstName',
      headerName: 'First name',
      width: 150,
      editable: true,
      type:"string"
    },
    {
      field: 'lastName',
      headerName: 'Last name',
      width: 150,
      editable: true,
      type:"string"
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      type:"string",
      valueGetter: (params: GridValueGetterParams) =>
        `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 110,
      editable: true,
   
    },
    {
      field: 'phone',
      headerName: 'Phone',
      type: 'number',
      width: 110,
      editable: true,
    },
    
    
   
    {
      field:"status",
      headerName:"Status",
      width:100,
      type:"boolean"
  },
  
  ];
  

  return (

    <div className='users'>
      
      <div className="info">
      <h1>Users</h1>
      <button onClick={()=> setOpen(true)}>Add New User</button>
      </div>
      <DataTable slug="users" columns={columns} rows={userRows}/>
      {open && <AddNewUser slug='user'columns={columns} setOpen={setOpen}/>}
    
    </div>
  )
}

export default Users

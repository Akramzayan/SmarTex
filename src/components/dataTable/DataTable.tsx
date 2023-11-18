import React, { useState } from 'react'

import './dataTable.scss'
import { DataGrid,GridColDef,GridToolbar } from '@mui/x-data-grid'
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Link } from 'react-router-dom'
import ViewDetails from '../addNewUser/ViewDetails';



type Props={
    columns:GridColDef[],
    rows:object[],
    slug:string
}

const DataTable = (props:Props) => {
    const [open,setOpen] =useState(false)
    const handleDelete=(id:number)=> {
        //delete the item
        //axios.delete(`/api/${slug}/id`)
        console.log(id+"has been deleted !")

    }
const actionColumns:GridColDef = {
    field:"action",
    headerName:"Action",
    width:200,
    renderCell:(params)=> {
        return(
            <div className='action'>
                <Link to={`/${props.slug}/${params.row.id}`}>
                    <img src="/view.svg" alt="" />
                </Link>
                <div className='delete'onClick={()=>handleDelete(params.row.id)}>
                    <img src="/delete.svg" alt="" />

                </div>
                <div className="view" onClick={()=>setOpen(true)}>
                <VisibilityIcon />

                </div>


            </div>
        )
    }
 
}

  
  return (
    <div className='dataTable'>
      
      <DataGrid
        className='dataGrid'
        rows={props.rows}
        columns={[...props.columns, actionColumns]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        slots={{toolbar:GridToolbar}}
        slotProps={{
            toolbar:{
                showQuickFilter:true,
                quickFilterProps:{debounceMs:500}
            }
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        //disableColumnFilter
        //disableDensitySelector
        
      />
      {open && <ViewDetails setOpen={setOpen}/>  }
    
      
    </div>
  )
}

export default DataTable

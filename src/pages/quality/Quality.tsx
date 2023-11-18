import { useState } from "react";

import DataTable from "../../components/dataTable/DataTable";
import { products } from "../../data";
import "./quality.scss";
import { GridColDef } from "@mui/x-data-grid";
import AddQuality from "../../components/addQuality/AddQuality";


const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "img",
    headerName: "Image",
    width: 100,
    renderCell: (params) => {
      return <img src={params.row.img || "/noavatar.png"} alt="" />;
    },
  },
  {
    field: "title",
    type: "string",
    headerName: "Title",
    width: 250,
  },
  {
    field: "color",
    type: "string",
    headerName: "Color",
    width: 150,
  },
  {
    field: "price",
    type: "string",
    headerName: "Price",
    width: 200,
  },
  {
    field: "producer",
    headerName: "Producer",
    type: "string",
    width: 200,
  },
  {
    field: "createdAt",
    headerName: "Created At",
    width: 200,
    type: "string",
  },
  {
    field: "inStock",
    headerName: "In Stock",
    width: 150,
    type: "boolean",
  },
];

const Quality = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="quality">
      <div className="info">
        <h1>Quality</h1>
        
    
        <button onClick={() => setOpen(true)}>Saisie routouche M1</button>
        {open && <AddQuality slug="Quality" setOpen={setOpen} />}
      </div>
      <DataTable slug="products" columns={columns} rows={products} />
    </div>
  );
};

export default Quality;

import React, { useState } from "react";
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
import "./rendment.scss";
import AddNewRendment from "../addNewRendment/AddNewRendment";


type RowData = {
  name: string;
  description: string;
  status: string;
};

const Rendement = () => {
  const initialRows: RowData[] = [
    { name: "zddzazda", description: "zdazdzadza", status: "draft" },
    { name: "zddzazda", description: "zdazdzadza", status: "live" },
    { name: "zddzazda", description: "zdazdzadza", status: "error" },
    { name: "zddzazda", description: "zdazdzadza", status: "draft" },
    { name: "zddzazda", description: "zdazdzadza", status: "live" },
 ];

  const [rows, setRows] = useState<RowData[]>(initialRows);
  const [openModal, setOpenModal] = useState(false);

  const addNewRow = (newRow: RowData) => {
    setRows([...rows, newRow]);
  };

  const deleteRow = (index: number) => {
    const updatedRows = [...rows];
    updatedRows.splice(index, 1);
    setRows(updatedRows);
  };


  return (
    <section className="content">
      <div className="table1">
        <div className="modal">
          <button onClick={() => setOpenModal(true)}>Add New Rendment</button>
          {openModal && <AddNewRendment addNewRow={addNewRow}  setOpen={setOpenModal} />}
        </div>
        <table className="tableContent">
          <thead>
            <tr>
              <th>Page</th>
              <th className="expand">Description</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={index}>
                <td>{row.name}</td>
                <td>{row.description}</td>
                <td>
                  <span className={`label label-${row.status}`}>{row.status}</span>
                </td>
                <td>
                  <span className="icons">
                    <BsFillTrashFill
                      className="delete"
                      onClick={() => deleteRow(index)}
                    />
                    <BsFillPencilFill className="add" />
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Rendement;
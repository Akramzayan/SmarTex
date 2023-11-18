import React, { useState } from "react";
import "./addNewRendment.scss";

type Props = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  addNewRow: (newRow: any) => void;
};

const AddNewRendment = (props: Props) => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    status: "live",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
      
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    props.addNewRow(formData);
    props.setOpen(false);
  };

  return (
    <div className="addRendment">
      <div className="modal">
        <span className="close" onClick={() => props.setOpen(false)}>
          X
        </span>
        <h1>Add New Rendment</h1>
        <form onSubmit={handleSubmit}>
          <div className="item">
            <label>Page</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="item">
            <label>Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
          </div>
          <div className="item">
            <label>Status</label>
            <select name="status" value={formData.status} onChange={handleChange}>
              <option value="live">Live</option>
              <option value="draft">Draft</option>
              <option value="error">Error</option>
            </select>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AddNewRendment;
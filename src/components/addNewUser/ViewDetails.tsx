import React from 'react'

type Props = {  
   
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;}

const ViewDetails = (props: Props) => {
  return (
    <div className="addUser">
    <div className="modal">
      <span className="close" onClick={() => props.setOpen(false)}>
        X
      </span>
      <h1>Details</h1>
    
    </div>
  </div>
);
};


  

export default ViewDetails
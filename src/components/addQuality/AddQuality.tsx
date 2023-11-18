import React from 'react'
type Props={
    slug:string;
    
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;

}
const AddQuality = (props:Props) => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    
        props.setOpen(false)
      };
   
  return (
    <div className="addQuality">
        <div className='modal'>
       
            <span className='close' onClick={()=>props.setOpen(false)}>X</span>
            <h1> Add new {props.slug}</h1>
            <form onSubmit={handleSubmit} >
                <div className='item'>
                    <label>
                        Chaine
                    </label>
                    <select >
                   
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        </select>
                   

                </div>
                
            </form>
      
            </div>
  </div>
  )
}

export default AddQuality


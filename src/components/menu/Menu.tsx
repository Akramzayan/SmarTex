import React, { useState } from 'react'
import "./menu.scss"
import { Link } from 'react-router-dom'

const Menu = () => {
  const[openProduction,setOpenProduction] =useState(false)
  const[openMethode,setOpenMethode] =useState(false)
  const[openQuality,setOpenQuality] =useState(false)
  const[openResource,setOpenResource] =useState(false)
  const[openMaintenance,setOpenMaintenance] =useState(false)
  const[openStock,setOpenStock] =useState(false)
  const[openCalendar,setOpenCalendar] =useState(false)
  
  return (
    <div className='menu'>
        <div className="item">
        
          <Link to={'/'} className='listItem'>
          <span className='title'>Dashboard</span>
         
          </Link>
          <div  className='listItemcl'>
            <div className='production-img'onClick={()=> 
            setOpenCalendar(!openCalendar)
              
            }>
          <img src="home.svg" alt='' />
          <span className='listItemTitle'>Calender</span>
          </div>
          {openCalendar && 
          <div className='dropDownItems'>
          <Link to={'/calendar'}><span className='listItemTitle'>Calender</span></Link>
         
          </div>
          }
          
          </div>

          <div  className='listItemcl'>
            <div className='production-img'onClick={()=> 
            setOpenProduction(!openProduction)
              
            }>
          <img src="home.svg" alt='' />
          <span className='listItemTitle'>Production</span>
          </div>
          {openProduction && 
          <div className='dropDownItems'>
          <Link to={'/'}><span className='listItemTitle'>Dashboard</span></Link>
          <Link to={'/rendment'}><span className='listItemTitle'>Rendment</span></Link>
          <Link to={'/Avancment'}><span className='listItemTitle'>Avancment</span></Link>
          </div>
          }
          
          </div>

          <div  className='listItemcl'>
            <div className='production-img'onClick={()=> 
            setOpenMethode(!openMethode)
              
            }>
          <img src="home.svg" alt='' />
          <span className='listItemTitle'>Mehtode</span>
          </div>
          {openMethode && 
          <div className='dropDownItems'>
          <Link to={'/products'}><span className='listItemTitle'>Game De montage</span></Link>
          <Link to={'/products'}><span className='listItemTitle'>Operations</span></Link>
          <Link to={'/products'}><span className='listItemTitle'>Articles</span></Link>
          <Link to={'/products'}><span className='listItemTitle'>Liste des Competance</span></Link>
          <Link to={'/products'}><span className='listItemTitle'>Rendment Theorique</span></Link>
          </div>
          }
          
          </div>
            <div className='listItemcl'>
              <div className='production-img'onClick={()=>
              setOpenQuality(!openQuality)}>
                <img src="home.svg" alt="" />
                <span className='listItemTitle'>Quality</span>
              </div>
             {openQuality && <div className='dropDownItems'>
                <Link to={'/'}> Dashboard</Link>
                <Link to={'/quality'}> Quality</Link>

              </div>}

            </div>

            <div className='listItemcl'>
              <div className='production-img' onClick={() => 
              setOpenResource(!openResource)}>
                <img src="home.svg" alt="" />
                <span className='listItemTitle'>Resource Humaine</span>
              </div>
             {openResource&& <div className='dropDownItems'>
                <Link to={'/users'}><span className='listItemTitle'>Liste des ouvriers</span> </Link>

              </div>}

            </div>
            <div className='listItemcl'>
              <div className='production-img' onClick={()=> 
              setOpenMaintenance(!openMaintenance)}>
                <img src="home.svg" alt="" />
                <span className='listItemTitle'>Maintenance</span>
              </div>
             {openMaintenance&& <div className='dropDownItems'>
                <Link to={'/'} > <span className='listItemTitle'>Dashboard</span></Link>
                <Link to={'/products'} > <span className='listItemTitle'>Piece Machine</span></Link>
                <Link to={'/products'} > <span className='listItemTitle'>Piece De recharge</span></Link>
                <Link to={'/products'} > <span className='listItemTitle'>Interventions</span></Link>

              </div>}

            </div>
          <div className='listItemcl'>
            <div className='production-img' onClick={()=>
            setOpenStock(!openStock)}>
              <img src="home.svg" alt="" />
              <span className='listItemTitle'>Stock</span>

            </div>
          {openStock &&  <div className='dropDownItems'>
              <Link to={'/rendment'} > <span className='listItemTitle'>Dashboard</span></Link>
              <Link to={'/products'} > <span className='listItemTitle'>Tissu</span></Link>
              <Link to={'/products'} > <span className='listItemTitle'>Fourniture</span></Link>

            </div>}

          </div>
          
          
        </div>
       






    </div>
  )
}

export default Menu

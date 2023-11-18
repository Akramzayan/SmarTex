import React from 'react'
import './home.scss'
import { chartBoxUser,chartBoxProduct, chartBoxConversion,} from '../../data'
import TopBox from '../../components/topBox/TopBox'
import BarChartBox from '../../components/barChartBox/BarChartBox' 
import PieChartBox from '../../components/pieChartBox/PieChartBox'
import BigChartBox from '../../components/bigChartBox/BigChartBox'
import PieChartWithCustomized from '../../components/pieChartWithCustomized/PieChartWithCustomized'
import VerticalComposedChart from '../../components/verticalComposedChart/VerticalComposedChart'
const Home = () => {
  return (
    <div className='home'>
     
      <div className="box box1"><TopBox {...chartBoxUser}/></div>
      <div className="box box1"><TopBox {...chartBoxUser}/></div>
      <div className="box box2"><TopBox {...chartBoxUser}/></div>
      <div className="box box2"><TopBox {...chartBoxProduct}/></div>
   
      <div className="box box3"><BarChartBox {...chartBoxConversion} /></div>
      <div className="box box4"><PieChartBox/></div>
      <div className="box box5"><VerticalComposedChart/></div>
      <div className="box box6"><PieChartWithCustomized  /></div>
      <div className="box box7"><BigChartBox/></div>
     
     

    </div>
  )
}

export default Home

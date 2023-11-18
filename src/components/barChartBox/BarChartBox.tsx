import React from 'react'
import "./barChartBox.scss"
import { ResponsiveContainer,BarChart, XAxis, YAxis,Tooltip, Legend, CartesianGrid, Bar } from 'recharts'
type Props ={
    title:string;
    color:string;
    dataKey:string;
    chartData:object[],

}
const BarChartBox = (props: Props) => {
    
  return (
    <div className='barChartBox'>
        <h1>{props.title}</h1>
        <div className="chart">
           
        <ResponsiveContainer width="99%" height={150}>
        <BarChart
      
          data={props.chartData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
          <YAxis />
          <Tooltip
          contentStyle={{background:"#2a3447",borderRadius:'5px'}}
          labelStyle={{display:"none"}}
          cursor={{fill:"none"}} />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey={props.dataKey} fill={props.color} background={{ fill: '#eee' }} />
        </BarChart>
      </ResponsiveContainer>
        </div>
      
    </div>
  )
}

export default BarChartBox

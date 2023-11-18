import React from 'react'
import './verticalComposedChart.scss'
import { CartesianGrid, ComposedChart, Legend, ResponsiveContainer, XAxis, YAxis,Tooltip, Area, Bar, Line, Pie, Cell } from 'recharts'

const VerticalComposedChart = () => {
    const data = [
        {
          name: 'Page A',
          uv: 590,
          pv: 800,
          amt: 1400,
        },
        {
          name: 'Page B',
          uv: 868,
          pv: 967,
          amt: 1506,
        },
        {
          name: 'Page C',
          uv: 1397,
          pv: 1098,
          amt: 989,
        },
        {
          name: 'Page D',
          uv: 1480,
          pv: 1200,
          amt: 1228,
        },
        {
          name: 'Page E',
          uv: 1520,
          pv: 1108,
          amt: 1100,
        },
        {
          name: 'Page F',
          uv: 1400,
          pv: 680,
          amt: 1700,
        },
      ];
  return (
    <div className='VerticalComposedChart'>
        <h1> another One</h1>
        <div className='VerticalChart'>
        <ResponsiveContainer width="99%" height={300}>
        <ComposedChart
          layout="vertical"
          data={data}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" scale="band" />
          <Tooltip
           contentStyle={{background:"white",borderRadius:"10px"}}/>
           <Pie
          data={data}
         
          innerRadius={80}
          outerRadius={100}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((item) => (
            <Cell key={item.name}/>
          ))}
        </Pie>
           
          <Legend />
          <Area dataKey="amt" fill="#8884d8" stroke="#8884d8" />
          <Bar dataKey="pv" barSize={20} fill="#413ea0" />
          <Line dataKey="uv" stroke="#ff7300" />
        </ComposedChart>
      </ResponsiveContainer>


        </div>
      
    </div>
  )
}

export default VerticalComposedChart

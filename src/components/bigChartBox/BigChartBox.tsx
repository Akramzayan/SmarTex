import React from 'react'
import "./bigChartBox.scss"
import { AreaChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis,
    Tooltip, 
    Area} from 'recharts'

    const data =[
        {
            name:"Sun",
            numberProducts:400,
            amt:2400,
            employers:200,
        },
        {
            name:"Monday",
            numberProducts:530,
            amt:3400,
            employers:100,
        },
        {
            name:"tuesday",
            numberProducts:600,
            amt:2200,
            employers:150,
        },
        {
            name:"Thursday",
            numberProducts:1000,
            amt:2400,
            employers:360,
        },
        {
            name:"Friday",
            numberProducts:800,
            amt:5400,
            employers:400,
        },
        {
            name:"Saturday",
            numberProducts:830,
            amt:1000,
            employers:110,
        },
    ]
const BigChartBox = () => {
  return (
    <div className='bigChartBox'>
        <h1>Revenue Analytics</h1>
        <div className="chart">
        <ResponsiveContainer width="99%" height="100%">
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid  />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="numberProducts" stackId="1" stroke="#8884d8" fill="#8884d8" />
          <Area type="monotone" dataKey="pv" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
          <Area type="monotone" dataKey="amt" stackId="1" stroke="#ffc658" fill="#ffc658" />
        </AreaChart>
      </ResponsiveContainer>
        </div>
      
    </div>
  )
}

export default BigChartBox

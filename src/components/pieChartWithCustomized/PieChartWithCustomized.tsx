import React from 'react'
import "./pieChartWithCustomized.scss"
import {  Cell, Pie, PieChart, ResponsiveContainer ,Tooltip} from 'recharts'

const data = [
    { name: 'Group A', value: 400 ,color:"#00c49f"},
    { name: 'Group B', value: 300 ,color:"#088C9f"},
    { name: 'Group C', value: 300,color:"#FFbb28" },
    { name: 'Group D', value: 200,color:"#FF8042" },
  ];
  
const PieChartWithCustomized = () => {
  return (
    <div className='PieChartWithCustomized'>
        <h1>Percentage of The Performance</h1>
        <div className='PieChart' >
        <ResponsiveContainer width="99%" height={300}>
        <PieChart >
        <Tooltip
            contentStyle={{background:"white",borderRadius:"10px"}}/>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
             
             {data.map((item) => (
            <Cell key={item.name}fill={item.color} />
          ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      </div>
      <div className="options">
                {data.map(item => (
                    <div className='option' key={item.name}>
                        <div className="title">
                            <div className='dot' style={{backgroundColor:item.color}}/>
                            <span>{item.name}</span>
                        </div>
                            <span>{item.value}</span>

                    </div>
                ))}

        </div>
        
      
    </div>
  )
}

export default PieChartWithCustomized

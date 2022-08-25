import React from 'react'
import "./charts.scss"
import { AreaChart, Area, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
{ name: "January", Total: 1200 },
  { name: "February", Total: 2100 },
  { name: "March", Total: 800 },
  { name: "April", Total: 1600 },
  { name: "May", Total: 900 },
  { name: "June", Total: 1700 },
  ];
  
const Charts = () => {
  return (
    <div className='chart'>
        <div className='title'>Last 6 months Revenue</div>
        <ResponsiveContainer width="100%" aspect={3/1}>
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke='lightgray'/>
          <XAxis dataKey="name" stroke='gray'/>
          <Tooltip />
          <Area type="monotone" dataKey="Total" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Charts
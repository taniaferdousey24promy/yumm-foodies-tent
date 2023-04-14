import React from 'react';
import './Statistics.css';

import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    Tooltip
  } from "recharts";

const Statistics = () => {

    const data = [
        {
          subject: 'As- 1',
          A:50,

          fullMark: 60,
        },
        {
          subject: 'As- 2',
          A:45,


          fullMark: 60,

        },
        {
          subject: 'As- 3',
          A:45,


          fullMark: 60,
        },
        {
          subject: 'As-4',
          A:53,

  
          fullMark: 60,
        },
        {
          subject: 'As- 5',
          A:60,


          fullMark: 60,
        },
        {
          subject: 'As- 6',
          A:56,


          fullMark: 60,
        },
        {
            subject: 'As- 7',
            A:60,


            fullMark: 60,
          },
          {
            subject: 'As- 8',
            A:58,


            fullMark: 60,
          }
    
      ];
    return (
        
        <div className='chart'>

            <h2>All Assignment Marks</h2>

        
        <RadarChart
      cx={300}
      cy={250}
      outerRadius={150}
      width={500}
      height={500}
      data={data}
    >
      <PolarGrid />
      <PolarAngleAxis dataKey="subject" />
      <PolarRadiusAxis />
      <Radar
        name="Tania Ferdousey Promy"
        dataKey="A"
        stroke="#8884d8"
        fill="#8884d8"
        fillOpacity={0.6}
      />
      <Tooltip/>
    </RadarChart>
    </div>
            
            
    );
};

export default Statistics;
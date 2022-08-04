import React, { useState } from 'react'

export default function Marquee(props) {
    
    var datarow = "";

    for (var i = 0 ;i<props.data.length;i++){

        datarow = ""+datarow+props.data[i]['name']+" - "+props.data[i]['last']+"$ | "

    }
    console.log(datarow)

  return (
    <div>
        <marquee>
            <span className='badge bg-success'>
            {datarow}
            </span>
        </marquee>
    </div>
  )
}

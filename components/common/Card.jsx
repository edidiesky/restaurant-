import React from 'react'
import styled from 'styled-components'

export default function Card({index,x}) {
  return (
    <CardContent key={index}>
        <div className="w-100 imageContent">
            <img src={x.image} alt="" className="w-100 h-100" />
        </div>
    </CardContent>
  )
}

const CardContent = styled.div`
    width: 100%;
    min-height: 40rem;
    border: 1px solid rgba(0,0,0,.08);
`
import React from 'react'
import Banner from '../common/Banner'
import List from './List'

export default function Menu() {
  return (
    <div className='flex column gap-6'>
        <Banner/>
        <List/>
    </div>
  )
}

import React from 'react'
import About from './About'
import Article from './Article'
import Critics from './Critics'
import Experience from './Experience'
import News from './news'
import SingleTakout from './SingleTakout'
import TakeoutList from './TakeoutList'
import TakeoutMenu from './TakeoutMenu'

export default function Home() {
  return (
    <div>
      <About/>
      <Experience/>
      <Critics/>
      <Article/>
      <News/>
      <TakeoutMenu/>
      <TakeoutList/>
      <SingleTakout/>
    </div>
  )
}

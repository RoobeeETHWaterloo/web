import React from 'react'

import Header from 'layouts/Header/Header'

import Hero from './Hero/Hero'
import Usage from './Usage/Usage'
import Platforms from './Platforms/Platforms'
import BuildingApproach from './BuildingApproach/BuildingApproach'
import ItMakesSense from './ItMakesSense/ItMakesSense'
import WhatIsNext from './WhatIsNext/WhatIsNext'
import WithLove from './WithLove/WithLove'


const HomePage = () => (
  <div>
    <Header />
    <Hero />
    <Usage />
    <Platforms />
    <BuildingApproach />
    <ItMakesSense />
    <WhatIsNext />
    <WithLove />
  </div>
)


export default HomePage

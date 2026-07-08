import React from 'react'

import BannerSection from '../Component/BannerSection'
import Effortless from '../Component/Effortless'
import HowItWorks from '../Component/HowItWorks'
import WhatMake from '../Component/WhatMake'
import FaqSection from '../Component/FaqSection'
import Nutrition from '../Component/Nutrition'
export default function HomePage() {
  return (
    <div>
      <div id="home"><BannerSection /></div>
      <div id="about"><Effortless /></div>
      {/*<div id="process"><HowItWorks /></div>*/}
      <div id="standup"><WhatMake /></div>
      {/*<div id="faq"><FaqSection /></div>*/}
      <div id="nutrition"><Nutrition /></div>
    </div>
  )
}

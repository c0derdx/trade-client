import React from 'react'
import Card from './childComponents/Card'
import CardContainer from './childComponents/CardContainer'
import Cover from './childComponents/Cover'
import HeroSection from './childComponents/HeroSection'
import about from "../images/about.jpg"

function About() {
  return (
    <>
      <Cover
      name = "About"
      />
      <HeroSection
        image = {about}
      />
      <CardContainer/>
    </>
  )
}

export default About
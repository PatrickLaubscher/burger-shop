import CardSection from '@/components/Home/CardSection'
import HeroSection from '@/components/Home/HeroSection'
import React from 'react'

function HomeView() {
  return (
    <main 
    className="w-10/12 mx-auto text-white"
    >

        <HeroSection/>
        <CardSection/>

    </main>
  )
}

export default HomeView
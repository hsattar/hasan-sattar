import type { NextPage } from 'next'
import Experiences from '../components/experiences/Experiences'
import HeroSection from '../components/HeroSection'
import TechStack from '../components/technologies/TechStack'

const Home: NextPage = () => {
  return (
    <>
        <HeroSection />
        <TechStack />
        <Experiences />
    </>
  )
}

export default Home
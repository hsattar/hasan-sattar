import type { NextPage } from 'next'
import Experiences from '../components/experiences/Experiences'
import HeroSection from '../components/HeroSection'
import ReusableHead from '../components/ReusableHead'
import TechStack from '../components/technologies/TechStack'

const Home: NextPage = () => {
  return (
    <>
        <ReusableHead title="Hasan Sattar" />
        <HeroSection />
        <TechStack />
        <Experiences />
    </>
  )
}

export default Home
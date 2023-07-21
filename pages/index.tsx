import type { NextPage } from 'next'
import Experiences from '../components/experiences/Experiences'
import HeroSection from '../components/HeroSection'
import TechStack from '../components/technologies/TechStack'
import ReusableHead from '../components/ReusableHead'
import CodingProjects from '../components/coding-projects/CodingProjects'

const Home: NextPage = () => {
  return (
    <>
        <HeroSection />
        <TechStack />
        <ReusableHead title="Hasan Sattar - Projects" />
        <CodingProjects />
        <Experiences />
    </>
  )
}

export default Home
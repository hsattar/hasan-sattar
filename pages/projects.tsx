import type { NextPage } from 'next'
import CodingProjects from '../components/coding-projects/CodingProjects'
import ReusableHead from '../components/ReusableHead'
import SkillShareClasses from '../components/skillshare-classes/SkillShareClasses'

const Projects: NextPage = () => {
  return (
    <>
        <ReusableHead title="Hasan Sattar - Projects" />
        <CodingProjects />
        <SkillShareClasses />   
    </>
  )
}

export default Projects
import * as React from 'react'
import Layout from '../components/layout'
import About from '../components/About'
import Projects from '../components/Projects'
import Intro from '../components/Intro'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home">
      <Intro />
      <Projects />
      <About />
    </Layout>
  )
}
// Step 3: Export your component
export default IndexPage

import * as React from 'react'
import Layout from '../components/layout'
import About from '../components/About'
import Projects from '../components/Projects'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home">
      <title>Home Page</title>
      <h1>Hello</h1>
      <h2>My Name is</h2>
      <h3>Coleen Huang</h3>
      <h2>I build things for the web</h2>
      <Projects />
      <About />
    </Layout>
  )
}
// Step 3: Export your component
export default IndexPage

import * as React from 'react'
import About from '../components/About'
import Projects from '../components/Projects'

const IndexPage = () => {
  return (
    <main>
      <title>Home Page</title>
      <h1>Hello</h1>
      <h2>My Name is</h2>
      <h3>Coleen Huang</h3>
      <h2>I build things for the web</h2>
      <Projects />
      <About />
    </main>
  )
}
// Step 3: Export your component
export default IndexPage

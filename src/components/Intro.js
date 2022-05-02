import React from 'react';
import {introContainer, name, greeting, second} from './intro.module.css'

const Intro =() => (
    <div className={introContainer}>
      <h1 className={greeting}>Hello!</h1>
      <h2>My Name is</h2>
      <h3 className={name}>Coleen Huang</h3>
      <h2>I build things for the web</h2>
    </div>
)

export default Intro;
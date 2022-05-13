import React from 'react';
import { StaticImage } from "gatsby-plugin-image"
import {introContainer, name, greeting} from './intro.module.css'

const Intro =() => (
    <div className={introContainer}>
      <div>
        <p className={greeting}>Hello!</p>
        <p>My Name is
        <span className={name}> Coleen Huang </span>
        </p>
        <p>I build things for the web</p>
      </div>
      <StaticImage src="../images/cupoftea.jpg"
      alt="A cup of tea"
      placeholder="blurred"
      layout="fixed"
      width={350}
      height={350} />
    </div>
)

export default Intro;
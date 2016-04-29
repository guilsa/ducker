import React, { PropTypes } from 'react'
import { container, title, slogan } from './styles.css'

export default function Home (props) {
  return (
    <div className={container}>
      <p className={title}>{'Ducker'}</p>
      <p className={slogan}>Wanna see a Twitter remake?</p>
      <p className={slogan}>Try it out!</p>
    </div>
  )
}

import React, { PropTypes } from 'react'
import { container, title, header, subHeader } from './styles.css'

export default function Home (props) {
  return (
    <div className={container}>
      <p className={title}>{'Ducker'}</p>
      <p className={header}>Wanna see a Twitter remake?</p>
      <p className={subHeader}>Try it out!</p>
    </div>
  )
}

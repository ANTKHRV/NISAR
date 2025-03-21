import React from 'react'
import banermodule from './baner.module.css'
import TextBan from './TextBan'

const Baner = () => {
  return (
    <div className={banermodule.baner}>
      <TextBan/>
    </div>
)
}

export default Baner
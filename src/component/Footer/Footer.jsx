import React from 'react'
import './footer.css'

const Footer = ({show,setShow}) => {
  const styleText = {
    height: show ? 0 : 'fit-content',
    transform: show ? 'translateY(-20px)' : 'translateY(0)',
    transition: '0.5s transform ease 0s,0.5s opacity ease 0s'
  }
  return (
    <div className='footer'>
        <span className='footer__text' onClick={()=> setShow(!show)} style={{...styleText,opacity: show ? 0 : 1,visibility: show ? 'hidden' : 'visible'}}>Friend Who Enrolled</span>
        <span className='footer__text' style={{...styleText}}>Terms & Conditions</span>
    </div>
  )
}

export default Footer
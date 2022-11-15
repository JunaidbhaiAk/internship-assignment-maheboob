import React from 'react'
import { fcardsData, features } from '../../utils/constants'
import Card from './Card'
import Fcard from './Fcard'
import './featurecard.css'
const Featurecard = ({show}) => {
  const styleFeature = {
    transform: show ? 'translateY(-440px)' : 'translateY(0)',
    width: show ? 0 : '100%',
    height:show ? 0 : 'fit-content',
    opacity: show ? '0' : '1',
    visibility: show ? 'hidden' : 'visible',
    transition: '0.5s transform ease 0s,0.5s opacity ease 0s'
  }
  const styleWallet = {
    transform: show ? 'translateY(0)' : 'translateY(-1370px)',
    opacity: show ? '1' : '0',
    width: !show ? 0 : '100%',
    height:!show ? 0 : 'fit-content',
    visibility: show ? 'visible' : 'hidden',
    transition: '0.5s transform ease 0s,0.5s opacity ease 0s'
  }
  return (
    <>
    <div className='featurecard' style={styleFeature}>
        <div className="featurecard__heading">
            <h2>How does it work ?</h2>
        </div>
        <div className="featurecard__cardcontainer">
            {features.map(({title,info},idx) => <Card title={title} info={info} key={idx} image={idx + 1} />)}
        </div>
    </div>  

    {/* friend Wallet Second Section */}
    <div className='friendcard' style={styleWallet}>
        <div className="friendcard__heading">
            <h2>Friends who enrolled <span className='friend__count'>(3)</span></h2>
        </div>
        
        <div className="friendcard__container">
          {fcardsData.map((ele,idx) => <Fcard data={ele} key={idx}/>)}
        </div>
    </div>
    </>
  )
}

export default Featurecard
import React from 'react'

const Fcard = ({data}) => {
  const {name,amount,tags,date} = data
  return (
    <div className='fcard'>
        <div className="fcard__top">
            <span className="fcard__top__name">
                {name}
            </span>
            <span className='fcard__top__date'>
               {date}
            </span>
        </div>
        <div className="fcard__middle">
            <span className='fcard__tagsabout'>
                Courses Enrolled(6)
            </span>
            <div className="fcard__tagscontainer">
                {tags.map((ele,idx) => <span className='tag' key={idx}>{ele}</span>)}
            </div>
        </div>
        <div className="fcard__footer">
            <span className='fcard__footer__text'>Refreral Amount</span>
            <span className="fcard__footer__amount">{amount}</span>
        </div>
    </div>
  )
}

export default Fcard
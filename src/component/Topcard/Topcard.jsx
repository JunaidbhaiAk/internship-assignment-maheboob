import React from "react";
import "./topcard.css";
import { referralCard } from "../../utils/constants";

const Topcard = ({ show,screenWidth }) => {
  const styleForcode = {
    transform: show ? `translateX(-${screenWidth - 600}px)` : 'translateX(0)',
    transition: '0.5s all'
  }

  const styleForRef = {
    transform: show ? `translateX(${screenWidth - 600}px)` : 'translateX(0)',
    transition: '0.5s all'
  }
  return (
    <div className="topcard" style={screenWidth > 900 ? {justifyContent:'space-between'} : {justifyContent: show ? 'space-between' : 'center'}}>
      <div className="topcard__referral" style={screenWidth > '900' ? styleForRef : {justifyContent:'space-between'}}>
        <div className="topcard__referral__textcontainer" style={{marginBottom:show ? '0' : '30px'}}>
          {referralCard.map(({ title, value }) =>
            genrateText({ title, value,show })
          )}
        </div>
        {!show && <div className="topcard__referral__buttoncontainer">
          <button className="topcard__referral_button">Withdraw Balance</button>
        </div>}
      </div>
      <div className={show ? 'topcard__code--ani' : "topcard__code"} style={screenWidth > '900' ? styleForcode : {}}>
        <span className={show ?"topcard__code__title--ani" : "topcard__code__title"}>Your Referral Code</span>
        <div className={show ?"topcard__code__box--ani" : "topcard__code__box"}>
          <span className="topcard__code__box__code">EDCH54</span>
        </div>
      </div>
    </div>
  );
};

const genrateText = ({ title, value, show }) => {
  if (!show) {
    return (
      <div
        className={`toptext ${title === "Referral Earning" && "marginLeft"}`}
        key={title + value}
      >
        <span className="toptext__title">{title}</span>
        <span className="toptext__value">{value}</span>
      </div>
    );
  }
  if (show && title === "Wallet Balance") {
    return (
      <div
        className='toptext marginLeft marginB'
        key={title + value}
      >
        <span className="toptext__title">{title}</span>
        <span className="toptext__value">{value}</span>
      </div>
    );
  }
};

export default Topcard;

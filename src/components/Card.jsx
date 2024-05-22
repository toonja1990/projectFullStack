import React from "react";

function Card({info,imgSrc,displayPosition}) {
    console.log("Card");
    console.log(info);
    console.log(imgSrc);
    console.log(displayPosition);
  return (

<div className="col-lg-6" data-aos="fade-up" data-aos-delay={displayPosition}>
<div className="team-member d-flex align-items-start">
<div className="pic"><img src={imgSrc} className="img-fluid" alt="" /></div>
  <div className="member-info">
    <h4>{info.name}</h4>
    <span>{info.position}</span>
    <p>{info.description}</p>
    <div className="social">
      <a href=""><i className="bi bi-twitter-x"></i></a>
      <a href=""><i className="bi bi-facebook"></i></a>
      <a href=""><i className="bi bi-instagram"></i></a>
      <a href=""> <i className="bi bi-linkedin"></i> </a>
    </div>
  </div>
</div>
</div>
  );
}

export default Card;

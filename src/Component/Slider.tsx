// import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Container } from '@mui/material';


export default function Slider() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex:any, e:any) => {
    setIndex(selectedIndex);
    console.log(e)
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} style={{paddingTop:'3px'}}>
      <Carousel.Item  style={{ borderRadius:'50px' }}>
        <a href='/'>
        <img
          className="d-block w-100"
          src="https://assets-in.bmscdn.com/promotions/cms/creatives/1670502578966_web.jpg"
          alt="First slide"
        /></a>
        {/* <Carousel.Caption>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item  style={{ borderRadius:'50px'}}>
        <a href='/'>
        <img
          className="d-block w-100"
          src='https://assets-in.bmscdn.com/promotions/cms/creatives/1673502697249_kutteyweb.jpg'
          alt="Second slide"
        />
       </a>
        {/* <Carousel.Caption>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item  style={{ borderRadius:'50px'}}>
        <a href='/'>
        <img
          className="d-block w-100"
          src="https://assets-in.bmscdn.com/promotions/cms/creatives/1672137034486_ritvizweb.jpg"
          alt="Third slide"
        />
        </a>
        {/* <Carousel.Caption>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
  );
}

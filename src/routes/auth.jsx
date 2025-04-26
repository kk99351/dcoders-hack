import React from 'react'
import discord from '../assets/icons/discord.svg';
import github from '../assets/icons/github1.svg';
import linkedin from '../assets/icons/linkedin.svg';
import twitter from '../assets/icons/twitter.svg';
import LoginCard from '../components/LoginCard';

import codeStudio from '../assets/images/New-Logo-03-1024x358.png'
import hackerRank from '../assets/images/800px-HackerRank_Icon-1000px.png'
import codeStudioPlayGround from '../assets/images/group-1000003188-28762.png'
import gfg from '../assets/images/unnamed (2).jpg'

import { Carousel } from '@material-tailwind/react';

export default function Auth() {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 w-full h-screen loginRoot'>
      <div className='loginRoot-left'>
        <div className='w-full flex justify-around flex-col h-full'>
        <Carousel className="rounded-xl" 
              prevArrow={false} 
              nextArrow={false}
              autoplay={true}
              autoplayDelay={2000}
              transition={{ type: "tween", duration: 1 }}
              loop={true}>
                <div className='h-full LoginTitle grow flex flex-col justify-center'>
                  <span>D'<b>CODERS</b></span>
                </div>
                <div className='h-full LoginTitle grow flex flex-row justify-around'>
                  <img
                      src={codeStudioPlayGround}
                      width={500}
                      alt="codeStudio playGround"
                      className='m-auto'
                    />
                </div>
                <div className='h-full LoginTitle grow flex flex-row justify-around'>
                  <div className='flex flex-col'>
                    <img
                      src={codeStudio}
                      width={400}
                      alt="codeStudio"
                      className='m-auto'
                    />
                  </div>
                  <div className='flex flex-col'>
                    <img
                      src={hackerRank}
                      width={200}
                      alt="hackerRank"
                      className='m-auto'
                    />
                    <img
                      src={gfg}
                      alt="GFG"
                      width={200}
                      className='m-auto'
                    />
                  </div>
                </div>
            </Carousel>
          <div className='LoginBottomLinks flex justify-around'>
            <img className='roundIcons' src={github} alt="" />
            <img className='roundIcons' src={twitter} alt="" />
            <img className='rectangleIcons' src={linkedin} alt="" />
            <img className='rectangleIcons' src={discord} alt="" />
          </div>
        </div>
      </div>
      <div className='loginRoot-right flex flex-col justify-center'>
        <div className='LoginTopLogo'>
            D'<span style={{fontWeight: 900}}>coders</span>
        </div>
        <LoginCard></LoginCard>
      </div>
    </div>
  )
}


import React from 'react'
import {HomeContainer,HomeBg,VideoBg,HomeContent,HomeH1,HomeP} from './HomeElements'
import Video from '../../Images/Video.mp4'
function HeroSection() {
    return (
        <HomeContainer id='home'>
            
            <HomeBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HomeBg>
            {/* <h1 className='text-white' style={{display:'visible',color:'wh'}}>Preethi S T</h1> */}
            <HomeContent>
            
                <HomeH1>Vijayalakshmi S</HomeH1>
                <HomeP>I'm a passionate <span style={{borderBottom:'3px solid green'}}>Web Developer</span> from India</HomeP> 
                <span className='float-left'>
                    <a href="https://github.com/subhasri32/" target='_blank' rel="noreferrer" className='btn btn-sm btn-success btn-circle'><i class="fab fa-github"></i></a>&emsp;
                    <a href="https://www.linkedin.com/in/vijayalakshmi-selvavinayakam/" target='_blank' rel="noreferrer" className='btn btn-sm btn-success btn-circle'><i class="fab fa-linkedin"></i></a>&emsp;
                </span>
            </HomeContent>
           {/*  <HomeSocialLinksWrapper>

            </HomeSocialLinksWrapper> */}
        </HomeContainer>
    )
}

export default HeroSection

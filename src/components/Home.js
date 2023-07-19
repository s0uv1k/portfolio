import React from 'react'

import img1 from './icons/me.jpg'
import { TypeAnimation } from 'react-type-animation';

const detail = ['Web Developer', 'App Developer', 'Content Wroter', 'Editor']


export default function Home() {
  //const myDetail = useDetails()
  return (
    <>
      <br/>
      <br/>
      <br/>
      <div className='container' style={{color:'white'}}>
        <div>
          <h3>Hi</h3>
        </div>
        <div>
          <h2>I'm Souvik Sarkar</h2>
        </div>
        <div>
          <h3 style={{color:'#fa6e9f'}}>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                'Web Developer', 
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                'App Developer',
                1000,
                'Content Writer',
                1000,
                'Editor',
                1000
              ]}
              wrapper="h3"
              speed={50}
              style={{ fontSize: '2em', display: 'inline-block' }}
              repeat={Infinity}
            />
          </h3>
        </div>
      </div>
      <div className='container'>
        <div className="row" >
          <div className='col py-3' rounded style={{float:'left',width: "100%"}}>
            <span className='rounded'><img src={img1} alt="" width={380} height={512}  /></span>
            
          </div>
          <div className='col' style={{float:'right',width: "100%"}}>
            <p style={{color:'white',fontSize: 20}}>I am 21 years old and am studying Information Technology at the Guru Nanak Institute of Technology. </p>
            <p style={{color:'white',fontSize: 20}}>I am interested in web development and various user interactive designing.</p>
            <p style={{color:'white',fontSize: 20}}>It has been a while since I've worked on a web development project myself, but I'm interested in doing more in this area. </p>
            <p style={{color:'white',fontSize: 20}}>In addition to Web Development, I am also interested in App Development. </p>
            <p style={{color:'white',fontSize: 20}}>As part of my semester break, I started my journey as an app developer by completing some small projects. </p>
            <p style={{color:'white',fontSize: 20}}>In addition, I am always on the lookout for new technologies and innovative programs. Whenever I learn something new, I'm energized by the experience. </p>
          </div>
        </div>
      </div>
      
    </>
  )
}

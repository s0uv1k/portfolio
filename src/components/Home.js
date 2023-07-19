import React from 'react'
import './Home.css'
import img1 from './icons/me.jpg'
import { TypeAnimation } from 'react-type-animation';

const detail = ['Web Developer', 'App Developer', 'Content Wroter', 'Editor']

 /*const Phase = {
    type: "type",
    pause: "pause",
    deleting: "deleting"
}

const TYPING_TIME = 100
const PAUSE_TIME = 1000
const DELETE_TIME = 50

const useDetails = (detail) =>{
  const [selectedIndex, setselectedIndex] = useState()

  const [phase, setphase] = useState(Phase.type)
  const [details, setdetails] = useState('')
  useEffect(()=> {
    switch (phase) {
      case Phase.type: {
        const nextDetail = detail[selectedIndex].slice(detail, details.length+1)

        if (nextDetail === detail){
          setphase(Phase.pause)
          return
        }
        const timeout = setTimeout(() => {
          setdetails(nextDetail)
        }, TYPING_TIME)
        return () => clearTimeout(timeout)
      }
      case Phase.deleting:{
        
        if (!detail){
          const nextIndex = selectedIndex + 1
          setselectedIndex(detail[nextIndex] ? nextIndex : 0)
          setphase(Phase.type)
          return
        }

        const nextRemaining = detail[selectedIndex].slice(detail, details.length-1)
        
        const timeout = setTimeout(() => {
          setdetails(nextRemaining)
        }, DELETE_TIME)
        return () => clearTimeout(timeout)
      }
      case Phase.pause:
        break;
      default:
        const timeout = setTimeout(() => {
          setphase(Phase.deleting)
        }, PAUSE_TIME)
        return() => clearTimeout(timeout)
        break;
    }
  },[detail,selectedIndex, details])

  return details

}*/
export default function Home() {
  //const myDetail = useDetails()
  return (
    <>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <div className=" col-lg-12 offset-lg-1 mb-3" style={{color:'white'}}>
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
        'Content Wroter',
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
      <div className=" col-lg-2 offset-lg-1 mb-3">
        <img src={img1} alt="" />
      </div>
    </>
  )
}

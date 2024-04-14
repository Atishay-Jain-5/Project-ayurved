import React from 'react'
import '@fontsource-variable/overpass';
import "react-chat-elements/dist/main.css"
import { MessageBox } from 'react-chat-elements';
import section_image from './section2.png'
import { Button } from '@mui/material';
function Section2() {
  return (
    <div className='flex flex-row gap-10 '>
      <div className='flex flex-col  h-96 w-5/12 mt-0 mb-40 items-end gap-8 '>
      <h1 className="text-4xl font-bold font-sans">
            Symptoms Checker and <br></br>Treatment Suggestions
          </h1>
          <h3 className="text-xl font-semibold">
        <ul class="list-disc list-inside font-sans mr-20">
            <li>Analyze Your Symptoms</li>
            <li>Understand Your Problems</li>
            <li>Identify Your illness</li>
            <li>Give you a Ayurvedic Solution </li>

        </ul>
          </h3>
          <div className=' font-sans flex flex-row gap-5'>
          <Button variant="contained" color='success' >Treat Me</Button>
          <h2 className='text-m font-semibold mr-20'>Get Your Personlaized<br></br> Treatment Now</h2>
          </div>
      </div>
      <div className=' h-96 w-6/12 mt-0 mb-40 rounded-xl'>
      <img src={section_image} className="w-11/12"></img>
      </div>
    </div>
  )
}

export default Section2

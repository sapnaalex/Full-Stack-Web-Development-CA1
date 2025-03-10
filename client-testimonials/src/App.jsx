import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TestimonialsCard from './components/TestimonialCard';

const App = () =>{
  const testimonial = [
    {
      Name:"Wilson",
      review:"Had a great experience here"
    },
    {
      Name:"John",
      review:"Such a great and joyful experience"
    },
    {
      Name:"Abraham",
      review:"Cute and relaxing place"
    },
    {
      Name:"Sarah",
      review:"I really enjoyed myself here"
    }
  
  ]
  return(
    <div className='client-testimonial'>
      testimonial.map{index}{...testimonial}
    </div>
  )
}



export default App;

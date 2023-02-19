import React from 'react'
import img1 from '../images/5395.jpg'
import img2 from '../images/images.jfif'
import img3 from '../images/Geiko_Kimiha.jpg'
import img4 from '../images/55c629efbd2aefa8d56d859844595f36--vintage-kimono-maiko.jpg'
import {motion} from "framer-motion"

const imgvariant = {

  hidden:{
    
    opacity:0
 },
 visible1:{
    opacity:1,
 
     transition:{
          delay:1 , duration: 1 , ease:"easeOut"}
 },
 visible2:{
   x:[1 , -1],
   
 
     transition:{
         yoyo:Infinity  , duration: 1 , ease:"easeInOut"}
 },
 visible3:{
   y:[1.5, -1.5],
 
     transition:{
         yoyo:Infinity  , duration: 1, ease:"easeInOut"}
 },
 visible4:{
   x:[1, -1],
   y:[1 , -1],
 
     transition:{
         yoyo:Infinity  , duration: 1 , ease:"easeInOut"}
 },
 exitgeisha:{
     opacity:0,
      transition:{duration:0.5 , ease:"easeInOut"}
    }



}

























const Geisha = () => {
  return (
    <motion.div className= "geisha"
    variants={imgvariant}
    initial="hidden"
animate="visible1"
exit="exitgeisha"
    >
<div className="container">
<img src={img1} alt="geisha" />


<div className='about-geisha'>

<div className='images-container'>


<motion.img src={img2} alt="geisha" 
variants={imgvariant}
animate="visible2"
/>
<img src={img4} alt="geisha" 
variants={imgvariant}
animate="visible3"
 />
<img src={img3} alt="geisha" 
variants={imgvariant}
animate="visible4"
 />



</div>
<p>A geisha is a Japanese female performance artist, traditionally hired to entertain guests at teahouses and social events. During such events, a geisha will sing, dance, perform music, host tea ceremonies, and serve food and drinks - all while engaging in lively conversation. The meaning of “geisha” comes from two kanji characters, “gei” (芸), meaning arts or entertainment, and “sha” (者), which means person. The word translates as a “person of the arts.”</p>



</div>



</div>




    </motion.div>
  )
}

export default Geisha
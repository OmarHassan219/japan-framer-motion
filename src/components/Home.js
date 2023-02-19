import React from 'react'
import img1 from "../images/4582560.jpg"
import img2 from "../images/leftphoto.png"
import img3 from "../images/rightphoto.png"
import {motion } from 'framer-motion'

const imgvariantleft = {
  hidden:{

y:"100vh",
x:250
  },
  visible:{
    y:0,
    x:0,
    transition:{
      y:{duration:1 , ease:"easeOut"},
      x:{delay:2 , duration:1 ,ease:"easeOut"}
    }
  }
}
const imgvariantright = {
  hidden:{

y:"100vh",
x:-250
  },
  visible:{
    y:0,
    x:0,
    transition:{
      y:{duration:1 , ease:"easeOut"},
      x:{delay:2 , duration:1 ,ease:"easeOut"}
    }
  }
}

const imgvariantmid ={

hidden:{opacity:0},
visible:{
  opacity:1,
  transition:{
    delay:3 , duration:1 , ease:"easeOut"
  }
}


}
const h1variant = {
  hidden1:{
    y:"-100vh"
  },
  hidden2:{
    y:"100vh"
  },
  visible:{
    y:0,
    transition:{
      delay:4 , duration:1 , ease :"easeOut"
    }
  }
}








const Home = () => {
  return (
    <div className='home'>

<div className="container">

  <motion.h1 className='discover'
  
  variants={h1variant}
  initial = "hidden1"
  animate = "visible"
  
  >Discover</motion.h1>

<motion.img className='side'  src={img2} alt="japan"
variants={imgvariantleft}
initial="hidden"
animate="visible"
/>
<motion.img  src={img1} alt="japan"
variants={imgvariantmid}
initial="hidden"
animate="visible"
/>



<motion.img className='side'  src={img3} alt="japan"
variants={imgvariantright}
initial="hidden"
animate="visible"

/>



<motion.h1 className='japan'
  variants={h1variant}
  initial = "hidden2"
  animate = "visible"


>Japan</motion.h1>



</div>






    </div>
  )
}

export default Home
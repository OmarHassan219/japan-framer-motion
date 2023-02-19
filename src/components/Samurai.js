








import React , {useState} from 'react'
import {motion} from "framer-motion"
import samuraiimg from "../images/samurai.png"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination } from "swiper";


const samuraivariant ={

hidden:{
    opacity:0
},
visible1:{
    opacity:[0 , 1],

transition:{

yoyo:Infinity,
duration:1,
ease:"easeInOut"
}
},
visible2:{
    opacity:1,

transition:{

duration:1,
ease:"easeInOut"
}
}

}






const Samurai = () => {
const [show, setshow] = useState(true)
setTimeout(() => {
setshow(false)
}, 4000)

  return (
    <div className='samurai'>

{show && 

<motion.img width={700} src={samuraiimg} alt="samurai"   
variants={samuraivariant}
animate="visible1"

/>

}


{!show &&


  <Swiper 
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        pagination={{
       clickable: true,
        }}
     modules={[EffectFade, Navigation, Pagination]}
      className="mySwiper"
      >
      <SwiperSlide>
          <p> samurai, member of the Japanese warrior caste. The term samurai was originally used to denote the aristocratic warriors (bushi), but it came to apply to all the members of the warrior class that rose to power in the 12th century and dominated the Japanese government until the Meiji Restoration in 1868.</p>
          <img src="https://cdn.britannica.com/71/196871-050-B8665B11/Samurai-Armour-Kusakabe-Kimbei.jpg" alt="samuraiimg"/>
        </SwiperSlide>
        <SwiperSlide>
            <p>Emerging from provincial warrior bands, the samurai of the Kamakura period (1192–1333), with their military skills and deep pride in their stoicism, developed a disciplined culture distinct from the earlier, quiet refinement of the imperial court. During the Muromachi period (1338–1573) under the growing influence of Zen Buddhism</p>
          <img src="https://songhantourist.com/upload/articles-images/1611108369-tinh-than-samurai-nhat-ban-co-gi-dang-nguong-mo.jpg" alt="samuraiimg"/>
        </SwiperSlide>
        <SwiperSlide>
            <p>the samurai culture produced many such uniquely Japanese arts as the tea ceremony and flower arranging that continue today. The ideal samurai was supposed to be a stoic warrior who followed an unwritten code of conduct, later formalized as Bushidō, which held bravery, honour, and personal loyalty above life itself;</p>
          <img src="https://cdnsg.kilala.vn/data/upload/article/6127/samurai%20nhat%20ban.jpg" alt="samuraiimg"/>
        </SwiperSlide>
        <SwiperSlide>
            <p>ritual suicide by disembowelment (seppuku) was institutionalized as a respected alternative to dishonour or defeat.In the early part of the Tokugawa period (1603–1867), the samurai, who accounted for less than 10 percent of the population,were made a closed caste as part of a larger effort to freeze the social order and stabilize society.</p>
          <img src="https://www.br.de/kinder/samurai-ritter-schwert-100~_v-img__16__9__xl_-d31c35f8186ebeb80b0cd843a7c267a0e0c81647.jpg?version=51df3" alt="samuraiimg"/>
        </SwiperSlide>
      </Swiper>



    





}
        





    </div>
  )
}

export default Samurai
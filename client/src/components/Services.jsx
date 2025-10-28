import { useScroll ,motion, useTransform} from 'motion/react';
import React, { useRef } from 'react'


const Services = () => {



 
  // 2. Define the output range based on the desired speed
  // A 'speed' of 0.5 means the element moves half as fast as the scroll.
  // We transform the scroll progress (0 to 1) into a vertical position (0 to viewport height).
  
const services = [
  {
    id: 1,
    title: "Brand Strategy",
    tagline: "Define your identity, voice, and position.",
    description:
      "We craft brand strategies that connect emotionally and strategically with your audience — from brand discovery to visual identity and storytelling.",
    icon: "🎯",
    category: "Branding",
    img:"https://i.pinimg.com/736x/cd/72/c8/cd72c86ec80c621cbee01eee045e3020.jpg"
  },
  {
    id: 2,
    title: "Web Experience",
    tagline: "Design and build stunning digital experiences.",
    description:
      "We create modern, fast, and responsive websites using React, Next.js, and headless CMS — optimized for performance and conversion.",
    icon: "💻",
    category: "Development",
    img:"/web.jpg"
  },
  {
    id: 3,
    title: "Growth Marketing",
    tagline: "Attract, engage, and retain your audience.",
    description:
      "From SEO and paid ads to data-driven campaigns, we help brands grow with measurable marketing strategies.",
    icon: "🚀",
    category: "Marketing",
    img:"https://i.pinimg.com/1200x/3e/43/bb/3e43bbe3369aa024d0ca4189d1a5073f.jpg"
  },
  {
    id: 4,
    title: "Creative Production",
    tagline: "Bring ideas to life through visuals and motion.",
    description:
      "We produce scroll-stopping visuals, brand videos, and content that amplify your presence across platforms.",
    icon: "🎥",
    category: "Creative",
    img:"https://i.pinimg.com/736x/aa/9f/d8/aa9fd8fa2136522c6084840416534951.jpg"
  },
  {
    id: 5,
    title: "Product Design",
    tagline: "Design with users at the center.",
    description:
      "We design intuitive, user-friendly digital products — apps, dashboards, and SaaS interfaces that people love to use.",
    icon: "🧩",
    category: "Design",
    img:'https://i.pinimg.com/1200x/6f/a1/8d/6fa18d06540f1a23d202af3c74c4d8ad.jpg'
  },
  {
    id: 6,
    title: "Technology & Automation",
    tagline: "Code that scales and systems that work.",
    description:
      "We integrate APIs, automate workflows, and build scalable digital systems that save time and enhance performance.",
    icon: "⚙️",
    category: "Engineering",
    img:"https://i.pinimg.com/1200x/67/8b/43/678b433e1a5441c427e4bd5d78f11926.jpg"
  },
  {
    id: 7,
    title: "Social Media & Influence",
    tagline: "Grow your community with authentic storytelling.",
    description:
      "We manage your brand’s presence, content calendar, and influencer collaborations to boost visibility and engagement.",
    icon: "📱",
    category: "Marketing",
    img:"https://i.pinimg.com/1200x/6d/5b/b9/6d5bb9b741b766760a9c0d7ded6d85fb.jpg"
  },
  {
    id: 8,
    title: "Analytics & Optimization",
    tagline: "Data-driven insights for better decisions.",
    description:
      "We monitor your website and campaigns, using analytics to continually improve conversions, speed, and ROI.",
    icon: "📊",
    category: "Strategy",
    img:"https://i.pinimg.com/1200x/d5/ab/bb/d5abbbb66a0e729aef4025fa61af34e7.jpg"
  }
];


  return (



    
    <div className='min-h-screen w-screen relative'>

<div className=" w-full flex justify-center items-center py-7">        <h1 className='px-6  font-hero text-[30px]  md:text-[3vw]'>Crafting Digital Experiences That <span className='bg-green-300 text-white rounded-lg'>Drive</span> Growth </h1></div>
        <div className="flex  gap-[60px] flex-col justify-center  items-center mt-10 md:flex-wrap px-4">
  {services.map((service) => (
    <motion.div key={service.id}  initial={{y:50,opacity:0}} whileInView={{y:0,opacity:1}} transition={{duration:0.5,ease:"easeOut" ,damping:10,}} viewport={{once:true}} className="h-[400px] w-full   bg-black/5 flex flex-col rounded-lg  shadow-[0px_2px_8px_0px_rgba(99,99,99,0.2)] border-[0.51px] border-[#0000003e]  relative overflow-hidden md:flex-row md:w-[70%]">
        <div className="card absolute h-full w-full inset-0"></div>
         <div className='h-[50%]  z-20 p-4 md:h-full md:w-[50%]'> <img  src={service.img} className='h-full w-full object-cover md:rounded-[50px]' alt="" /></div>
           <div className='   flex flex-col p-4 md:justify-center md:h-full md:w-[50%] md:items-center'><h1 className='text-[25px] font-semibold'>{service.title}</h1><p className='md:max-w-[400px] text-gray-700 md:text-center'>{service.description}</p> </div>
     
    </motion.div>
  ))}
</div>

      </div>
   
  )
}

export default Services

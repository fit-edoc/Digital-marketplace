import React from 'react'

const Services = () => {


const services = [
  {
    id: 1,
    title: "Brand Strategy",
    tagline: "Define your identity, voice, and position.",
    description:
      "We craft brand strategies that connect emotionally and strategically with your audience — from brand discovery to visual identity and storytelling.",
    icon: "🎯",
    category: "Branding"
  },
  {
    id: 2,
    title: "Web Experience",
    tagline: "Design and build stunning digital experiences.",
    description:
      "We create modern, fast, and responsive websites using React, Next.js, and headless CMS — optimized for performance and conversion.",
    icon: "💻",
    category: "Development"
  },
  {
    id: 3,
    title: "Growth Marketing",
    tagline: "Attract, engage, and retain your audience.",
    description:
      "From SEO and paid ads to data-driven campaigns, we help brands grow with measurable marketing strategies.",
    icon: "🚀",
    category: "Marketing"
  },
  {
    id: 4,
    title: "Creative Production",
    tagline: "Bring ideas to life through visuals and motion.",
    description:
      "We produce scroll-stopping visuals, brand videos, and content that amplify your presence across platforms.",
    icon: "🎥",
    category: "Creative"
  },
  {
    id: 5,
    title: "Product Design",
    tagline: "Design with users at the center.",
    description:
      "We design intuitive, user-friendly digital products — apps, dashboards, and SaaS interfaces that people love to use.",
    icon: "🧩",
    category: "Design"
  },
  {
    id: 6,
    title: "Technology & Automation",
    tagline: "Code that scales and systems that work.",
    description:
      "We integrate APIs, automate workflows, and build scalable digital systems that save time and enhance performance.",
    icon: "⚙️",
    category: "Engineering"
  },
  {
    id: 7,
    title: "Social Media & Influence",
    tagline: "Grow your community with authentic storytelling.",
    description:
      "We manage your brand’s presence, content calendar, and influencer collaborations to boost visibility and engagement.",
    icon: "📱",
    category: "Marketing"
  },
  {
    id: 8,
    title: "Analytics & Optimization",
    tagline: "Data-driven insights for better decisions.",
    description:
      "We monitor your website and campaigns, using analytics to continually improve conversions, speed, and ROI.",
    icon: "📊",
    category: "Strategy"
  }
];


  return (



    
    <div className='min-h-screen w-screen relative'>
      <div className="absolute h-screen  w-screen bg-gradient-to-t from-white from-50% to-transparent">
        <h1 className='text-center '>we provide services</h1>
        <div className="flex  gap-8 flex-col justify-center  items-center mt-10 md:flex-wrap px-4">
  {services.map((service) => (
    <div key={service.id} className="h-[400px] w-[70%] rounded-lg  shadow-[0px_2px_8px_0px_rgba(99,99,99,0.2)] border-[1px] border-black  relative overflow-hidden">
        <div className="card absolute h-full w-full"></div>
         <div className="absolute h-full w-full bottom-[-30%]"></div>
     
    </div>
  ))}
</div>

      </div>
    </div>
  )
}

export default Services

import React, { useEffect } from "react";
import { motion, useAnimation } from "motion/react";

const Hero = () => {
  const controls = useAnimation();

  // Animate X translation from 0% to -50% infinitely
  const loopAnimation = {
    x: ["0%", "-50%"],
    transition: {
      repeat: Infinity,
      ease: "linear",
      duration: 20, // lower = faster scroll
    },
  };

  useEffect(() => {
    controls.start(loopAnimation);
  }, []);
  const photosdata = [
    {
      id: 1,
      img: "https://i.pinimg.com/736x/14/28/b6/1428b6e47625bd2dedb824fd1d99874f.jpg",
      border:"120px"
    },
    {
      id: 2,
      img: "https://i.pinimg.com/1200x/89/cc/68/89cc68f3eae8bff31cacd4a6bbe98c7d.jpg",
    },
    {
      id: 3,
      img: "https://i.pinimg.com/736x/a9/dd/95/a9dd954cb8f3d2af39b888ad213a9207.jpg",
       border:"120px"
    },
    {
      id: 4,
      img: "https://i.pinimg.com/1200x/2e/08/2e/2e082eea02ad5a2388cc8a90d8f7ccc4.jpg",
    },
  ];
  return (
    <div className="dots min-h-screen w-screen relative overflow-hidden">
      <div className="absolute  h-screen w-screen bg-gradient-to-b from-gray-50 to-transparent"></div>
      <div className="flex   flex-col justify-center items-center min-h-[130vh] overflow-hidden md:gap-[20px]">
        <h1 className="font-hero  z-30 text-[40px] max-w-[] text-center md:max-w-[50vw] md:text-[5vw] leading-[45px] md:leading-[70px]">
          Design That Grows With Your <span className="italic">Ambition</span>
        </h1>
        <p className="text-center ">
          From startup to enterprise - design that adapts to your growth
        </p>
        <div className=" z-30 mt-3 flex items-center justify-center gap-4">
          <button className="h-[30px] w-[100px] py-1 bg-[#ff205f] rounded-lg shadow-[0px_2px_8px_0px_rgba(99,99,99,0.2)]">
            Book
          </button>
          <button className="px-3 py-1 bg-[#ffffff] capitalize rounded-lg shadow-[0px_2px_8px_0px_rgba(99,99,99,0.2)]">
            get started
          </button>
        </div>
        <div className="cor soverflow-hidden w-full mt-[50px] ">
          <motion.div
            animate={controls}
            className="flex relative justify-center items-center  gap-2 w-max"
          >
            {/* First set of images */}
            <div className="flex gap-2">
              {photosdata.map((item, index) => (
                <div
                  key={`a-${index}`} style={{borderRadius:item.border}}
                  className="h-[300px] w-[300px] rounded-lg shrink-0"
                >
                  <img
                    src={item.img}
                    alt=""
                    style={{borderRadius:item.border}}
                    className="object-cover h-full w-full rounded-lg"
                  />
                </div>
              ))}
            </div>

            {/* Duplicate set for infinite effect */}
            <div className="flex gap-2">
              {photosdata.map((item, index) => (
                <div
                  key={`b-${index}`}
                  style={{borderRadius:item.border}}
                  className="h-[300px] w-[300px] rounded-lg shrink-0"
                >
                  <img
                    src={item.img}
                    style={{borderRadius:item.border}}
                    alt=""
                    className="object-cover h-full w-full rounded-lg"
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    
    </div>
  );
};

export default Hero;

import { motion } from "framer-motion";
import {styles} from '../styles';
import {ComputersCanvas} from './canvas';


const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#9153ff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            {" "}
            Hi, I'm <span className="text-[#915eff]"> Bryan </span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I am a full-stack developer with a focus on{" "}
            <br className="sm:block hidden" />
            Python and Javascript
            {/* <br className="sm:block hidden" /> */}
          </p>
        </div>
      </div>
      <ComputersCanvas />
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className=" w-[35]px h-[64]px rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-1 h-2 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Work from "../../components/work";
import Club from "../../components/club";
import { workData } from "./data/work";
import { clubData } from "./data/club";

function Experience() {
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <div className="h-full mt-32 mb-24 mx-4 md:mx-28">
      <p className="text-4xl md:text-8xl mb-8 text-dark-purple font-bold">EXPERIENCE</p>
      <div className="grid grid-cols-3 gap-24">
        <div className="col-span-1">
          <p className="text-[32px] text-regular-purple font-semibold mb-8">Werk Work</p>
          {workData.map((work, index) => {
            const { ref, inView } = useInView({
              triggerOnce: true, // The animation will only trigger once
            });

            return (
              <motion.div
                key={index}
                ref={ref}
                variants={variants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Work {...work} />
              </motion.div>
            );
          })}
          <img className='mt-12 w-[200px] h-[200px]' src='/images/the-experience-cat.png'></img>
        </div>
        <div className="col-span-2">
          <p className="text-[32px] text-regular-purple font-semibold mb-8">Clubs & College</p>
          {clubData.map((club, index) => {
            const { ref, inView } = useInView({
              triggerOnce: true,
            });

            return (
              <motion.div
                key={index}
                ref={ref}
                variants={variants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Club {...club} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Experience;
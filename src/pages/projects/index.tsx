import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Project from '../../components/project';
import Highlight from '../../components/highlight';
import { projectsData } from './data';

function Projects() {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <>
      <div className="h-full mx-4 md:mx-28">
        <p className="text-4xl md:text-8xl mb-8 text-dark-purple font-bold">PROJECTS</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {projectsData.map((project, index) => {
            const { ref, inView } = useInView({
              triggerOnce: true, // The animation will only trigger once
            });

            return (
              <motion.div
                ref={ref}
                key={index}
                variants={variants}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Project {...project} />
              </motion.div>
            );
          })}
          {/* Add the same animation to the last card */}
          {(() => {
            const { ref, inView } = useInView({
              triggerOnce: true,
            });

            return (
              <motion.div
                className='border-[3px] border-dashed border-dark-purple p-4 w-full'
                ref={ref}
                variants={variants}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                transition={{ duration: 0.5, delay: projectsData.length * 0.1 }}
              >
                <motion.img
  className='mx-auto mb-6 mt-8 w-[200px] h-[200px]'
  src='/images/the-project-cat.png'
  animate={{ rotate: 360 }}
  transition={{ duration: 0, repeat: Infinity }}
/>
                <p className='mb-[10px]'>More at my github —</p>
                <div className='mx-auto'><a href='https://github.com/cereal-hecker'><Highlight text="cereal-hecker" /></a></div>
              </motion.div>
            );
          })()}
        </div>
      </div>
    </>
  );
}

export default Projects;
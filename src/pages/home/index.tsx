import { motion } from "framer-motion"

function Home() {
  return (
    <>
      <div className="h-screen grid grid-cols-2 h-full">
        <div className="flex items-center justify-center text-dark-purple">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <p className="text-5xl font">hey, I'm</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <div className="relative mt-2">
                <p className="text-8xl font-bold z-10 relative">Riya</p>
                <div className="absolute bg-highlight bottom-0 left-0 w-full h-[32px] bg-highlight"></div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <div>
                <p className="pt-16">you might know me as</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1.5 }}
            >
              <div className="">
                <p className="text-3xl font-semibold">cereal-hecker</p>
                <div className="bg-highlight -mt-3 w-full h-2"></div>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="">ss</div>
      </div>
    </>
  );
}

export default Home;
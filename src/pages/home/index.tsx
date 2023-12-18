import { motion } from "framer-motion";

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
              transition={{ duration: 1 }}
            >
              <div className="inline-block mt-2">
                <span className="text-8xl px-2 font-bold">Riya</span>
                <div className="-mt-8 bg-highlight bottom-0 left-0 w-full h-[32px] bg-highlight"></div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <div>
                <p className="pt-16">you might know me as</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <div className="inline-block">
                <span className="text-3xl px-2 font-semibold">cereal-hecker</span>
                <div className="-mt-[12px] bg-highlight w-full h-[10px]"></div>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <motion.img
            className="w-[500px] h-[500px]"
            src="/images/random-circle.png"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1 }}
          />
        </div>
      </div>
    </>
  );
}

export default Home;

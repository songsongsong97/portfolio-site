import Image from "next/image";
import Button from "./Button";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import { container, item } from "../animations/animation";

export default function Intro() {
  return (
    <motion.ul
      variants={container}
      initial="hidden"
      whileInView="show"
      className="w-full xl:w-3/4 m-auto"
    >
      <div className="flex flex-col lg:flex-row items-center justify-center h-screen gap-4 mb-6">
        {/* mobile */}
        <Image
          className="lg:hidden"
          width="200"
          height="200"
          alt="profile"
          src="/images/my-image.png"
        />
        <div className="flex flex-col items-center lg:items-start w-3/4 lg:w-[45%]">
          <motion.li
            variants={item}
            className="flex-auto font-serif text-4xl lg:text-6xl"
          >
            <Typewriter
              options={{
                strings: [
                  "Hi! I am Lee Yee",
                  "A Developer",
                  "A Food Lover",
                  "A Traveller",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </motion.li>
          <motion.li
            variants={item}
            className="text-black dark:text-white font-sans text-xl mt-2 mb-4"
          >
            Want to know more about me?
          </motion.li>
          <motion.li variants={item}>
            <Button large label="Let's go!" href="#about" />
          </motion.li>
        </div>
        {/* web */}
        <Image
          className="hidden lg:block"
          width="200"
          height="200"
          alt="profile"
          src="/images/my-image.png"
        />
      </div>
    </motion.ul>
  );
}

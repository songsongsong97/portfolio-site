import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
import { motion } from "framer-motion";
import { container, item } from "../animations/animation";

export default function Contact() {
  return (
    <div id="contact" className="m-auto w-[80%] mb-12">
      <motion.ul
        variants={container}
        initial="hidden"
        whileInView="show"
        className="flex flex-col items-center justify-center gap-4 mb-4"
      >
        <motion.li
          variants={item}
          className="mb-2 text-4xl lg:text-6xl m-auto"
        >{`<Contact/>`}</motion.li>
        <motion.li
          variants={item}
          className="font-sans text-xl mt-2 mb-4 text-left text-black dark:text-white"
        >
          Feel free to reach out to me at{" "}
          <span className="underline">
            <a href="mailto:songleeyee97@gmail.com">songleeyee97@gmail.com</a>
          </span>
          . You could also follow me on{" "}
          <span className="underline">
            <a
              href="https://www.linkedin.com/in/song-lee-yee-7205b0139/"
              target="_blank"
            >
              LinkedIn
            </a>
          </span>{" "}
          and{" "}
          <span className="underline">
            <a href="https://github.com/songsongsong97" target="_blank">
              Github
            </a>
          </span>{" "}
          .
        </motion.li>
        <motion.li
          variants={item}
          className="flex flex-row gap-8 justify-center items-center m-4 text-black dark:text-white"
        >
          <a
            className="hover:opacity-80"
            href="https://www.linkedin.com/in/song-lee-yee-7205b0139/"
            target="_blank"
          >
            <AiFillLinkedin size={48} />
          </a>
          <a
            className="hover:opacity-80"
            href="https://github.com/songsongsong97"
            target="_blank"
          >
            <AiFillGithub size={48} />
          </a>
          <a className="hover:opacity-80" href="mailto:songleeyee97@gmail.com">
            <AiOutlineMail size={48} />
          </a>
        </motion.li>
      </motion.ul>
    </div>
  );
}

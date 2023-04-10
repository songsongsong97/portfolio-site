import Image from "next/image";

export default function About() {
  return (
    <div id="about" className="m-auto w-[80%] mb-12">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-4 mb-4">
        <div className="flex flex-col items-start w-full lg:w-1/2">
          <h1 className="mb-2 text-4xl lg:text-6xl">{`<About/>`}</h1>
          <p className="font-sans text-xl mt-2 mb-4 text-black dark:text-white">
            {`Hello, I'm Song Lee Yee (韩丽仪), a software engineer based in
            Singapore. I have a passion for technology and a constant desire to
            learn and grow my skills. I enjoy the process of building aesthetic
            web applications, and my goal is to become a better developer.`}
          </p>
          <p className="font-sans text-xl mt-2 mb-4 text-black dark:text-white">
            {`I was born in Kluang, Malaysia, a small town famous for its "tau sha
            piah" (a Chinese pastry) and coffee powder. During my leisure time,
            I enjoy working out and hanging out with friends, but most of the
            time, I prefer to chill at home!`}
          </p>
        </div>
        <div className="w-2/3 lg:w-1/3 lg:h-1/3 p-2 pb-6 bg-zinc-100 shadow-lg">
        <Image className="shadow-md" width="800" height="800" alt="profile" src="/images/pic1.jpg" />
        </div>
      </div>
    </div>
  );
}

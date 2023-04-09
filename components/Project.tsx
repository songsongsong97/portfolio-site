import ProjectItem from "./ProjectItem";

export default function Project() {
  const items: Record<string, any>[] = [
    {
      title: "Rendezvous Planner",
      description:
        "With Rendezvous Planner, you can easily create to-do lists, plan your day ahead, and keep track of your daily expenses.",
      link: "https://github.com/songsongsong97/rendezvous-planner",
      techstack: ["Django", "HTML", "CSS", "JavaScript"],
      imageUrl: "rendezvous.gif",
    },
    {
      title: "Pixel Art Generator",
      description:
        "This is a simple pixel art generator that allows you to create pixel art with desired width and height, and download your masterpiece in PNG format.",
      link: "https://github.com/songsongsong97/react-pixel-art-generator",
      techstack: ["ReactJS", "TailwindCSS"],
      imageUrl: "pixel-art.gif",
    },
    {
      title: "Fish Monitoring Systems",
      description:
        "This is a system to monitor unusual fish behavior using Python YOLO object detection model.",
      link: "https://github.com/songsongsong97/Fish-Monitoring-Systems",
      techstack: ["Python", "NodeJS", "ReactJS", "HTML", "CSS"],
      imageUrl: "fish.png",
    },
  ];
  return (
    <div id="project" className="mx-auto w-[80%] mb-12">
      <div className="flex flex-col">
        <h1 className="mx-4 mb-2 text-4xl lg:text-6xl self-end">{`<Project/>`}</h1>
        <div className="flex flex-wrap lg:flex-row justify-between content-center gap-4 items-center lg:items-start m-4">
          {items.map((item, id) => (
            <ProjectItem
              key={id}
              title={item.title}
              description={item.description}
              link={item.link}
              techstack={item.techstack}
              imageUrl={item.imageUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

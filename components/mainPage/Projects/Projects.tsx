import ProyectCard from "./ProjectCard";

const Proyects = () => {
  const data = [
    {
      title: "juegos",
      tecnologias: "js",
      img: "",
      link: "sdhfpds",
    },
    {
      title: "juegos2",
      tecnologias: "js",
      img: "",
      link: "sdhfpds",
    },
    {
      title: "juegos3",
      tecnologias: "js",
      img: "",
      link: "sdhfpds",
    },
  ];
  return (
    <div className="bg-gray-200 py-4 w-full flex flex-col">
      <div className="m-auto">
        <h1 className="uppercase font-bold m-auto text-2xl">Projects</h1>
      </div>
      <div className="flex flex-wrap gap-10 justify-center mt-4">
        {data.map((e) => {
          return <ProyectCard title={e.title} />;
        })}
      </div>
    </div>
  );
};

export default Proyects;

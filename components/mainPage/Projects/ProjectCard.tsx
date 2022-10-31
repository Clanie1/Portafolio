const ProyectCard = ({ title }: any) => {
  return (
    <div className="border-[1px] border-gray-300 rounded-md flex flex-col max-w-[300px] shadow-xl overflow-hidden hover:scale-[1.05] duration-75 cursor-pointer">
      <img src="https://th.bing.com/th/id/R.8768e98b62991a416fb14bb171a2812e?rik=BQgQwuePqASsWQ&pid=ImgRaw&r=0" />
      <div className="p-4 flex flex-col gap-2">
        <h1 className="font-bold text-xl">{title}</h1>
        <p className="text-justify">lorem 15 lorem 154</p>
      </div>
    </div>
  );
};

export default ProyectCard;

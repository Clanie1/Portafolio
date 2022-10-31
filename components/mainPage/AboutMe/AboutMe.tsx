import Btn from "../../core/Btn";

const AboutMe = () => {
  return (
    <div className="w-full bg-[#010409] py-10 flex items-center justify-around gap-0 flex-wrap text-[#BCD1D9]">
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-[65px] font-bold">Hi there!</h1>
        <h2 className="text-lg">
          My name is Daniel Barocio and I am a web developer
        </h2>
        <Btn>contactame</Btn>
      </div>
      <div className="w-1/3 rounded-full bg-neutral-400 overflow-hidden ">
        <img
          src="https://th.bing.com/th/id/R.348a964706c1f49e15a831463eca9879?rik=poYTm%2f%2fn5Nz4sQ&pid=ImgRaw&r=0"
          alt=""
          className="aspect-square w-full object-cover object-top"
        />
      </div>
    </div>
  );
};

export default AboutMe;

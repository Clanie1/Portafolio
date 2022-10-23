import Btn from "../core/Btn";

const Navbar = () => {
  return (
    <div className="w-full py-3 flex items-center justify-around bg-neutral-500 text-white">
      <h1 className="text-2xl">Navbar</h1>
      <div className="flex gap-6">
        <Btn>About me</Btn>
        <Btn>Projects</Btn>
        <Btn>Technologies</Btn>
        <Btn>Contact me</Btn>
      </div>
    </div>
  );
};

export default Navbar;

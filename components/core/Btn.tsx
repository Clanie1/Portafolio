const Btn = ({ children }: any) => {
  return (
    <button className="uppercase text-sm px-1 py-1 duration-200  border-b-2 border-neutral-500 hover:border-white tracking-widest">
      {children}
    </button>
  );
};

export default Btn;

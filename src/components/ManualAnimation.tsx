import { animate } from "framer-motion";

const ManualAnimation = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl">ManualAnimation</h1>
      <div
        id="box"
        className="h-52 w-52 rounded-md bg-yellow-200 mx-auto mt-10 "
      ></div>
      <button
        onClick={() => animate("#box", { opacity: 0 })}
        className="block mx-auto px-6 py-2 mt-6 rounded-md bg-slate-200 border-2 border-slate-600 border-solid"
      >
        Make invisible
      </button>
    </div>
  );
};

export default ManualAnimation;

const TaskitFront = () => {
  return (
    <section>
      <div className="w-full h-screen bg-zinc-200 overflow-hidden">
        <div className="flex flex-row w-full h-fit items-center align-center justify-between">
          <div className="w-2/3 h-12 bg-indigo-50 ml-10 rounded-3xl shadow-sm">
            <div className="w-72 bg-lime-500 h-full rounded-l-3xl border-r-4 border-lime-400"></div>
          </div>
          <h4 className=" p-5 text-right text-zinc-800 text-6xl">75%</h4>
        </div>
        <ul className="h-fit w-fit flex flex-row m-auto pt-5 pb-10 gap-2">
          <li className="text-5xl bg-white w-28 h-28 grid items-center px-5  rounded-full shadow-md border-4 border-zinc-400 font-semibold text-zinc-800">
            +3
          </li>
          <li className="text-7xl bg-white h-fit w-fit p-5 rounded-full -mr-8 shadow-lg border-4 border-zinc-300 opacity-97 z-30">
            🧠
          </li>
          <li className="text-7xl bg-white h-fit w-fit p-5 rounded-full -mr-8 shadow-lg border-4 border-zinc-300 opacity-98 z-30">
            🚀
          </li>
          <li className="text-7xl bg-white h-fit w-fit p-5 rounded-full -mr-8 shadow-lg border-4 border-zinc-300 opacity-99 z-40">
            💯
          </li>
          <li className="text-7xl bg-white h-fit w-fit p-5 rounded-full shadow-lg border-4 border-zinc-300 z-50">
            🎯
          </li>
          <li className="text-7xl bg-white p-8 rounded-full w-30 grid items-center -mt-4 shadow-md border-4 border-zinc-300">
            🥳
          </li>
        </ul>

        <ul className="flex flex-col gap-5 text-zinc-700 pl-5">
          <li className="w-full h-fit px-5 ">
            <div className="flex flex-row w-full h-full">
              <span className="text-5xl bg-zinc-50 p-4 rounded-2xl shadow-lg border-4 border-zinc-300">
                ✅
              </span>
              <p className="text-3xl bg-indigo-50 px-10 py-5 line-through rounded-3xl shadow-md border-4 border-zinc-300 ml-5">
                🥳 Fix allignment bug on div.
              </p>
            </div>
          </li>
          <li className="w-full h-fit px-5">
            <div className="flex flex-row w-full h-full">
              <span className="text-5xl bg-zinc-50 p-4 rounded-2xl shadow-lg border-4 border-zinc-300">
                ✅
              </span>
              <p className="text-3xl bg-indigo-50 px-10 py-5 line-through rounded-3xl shadow-md border-4 border-zinc-300 ml-5">
                🎯 Create color pallete for app.
              </p>
            </div>
          </li>
          <li className="w-full h-fit px-5">
            <div className="flex flex-row w-full h-full opacity-90">
              <span className="text-5xl bg-zinc-50 p-4 rounded-2xl shadow-lg border-4 border-zinc-300">
                ✅
              </span>
              <p className="text-3xl bg-indigo-50 px-10 py-5 line-through rounded-3xl shadow-md border-4 border-zinc-300 ml-5">
                💯 Email jordan about listing.
              </p>
            </div>
          </li>
          <li className="w-full h-fit px-5">
            <div className="flex flex-row w-full h-full opacity-80">
              <span className="text-5xl bg-zinc-50 p-4 rounded-2xl shadow-lg border-4 border-zinc-300">
                ✅
              </span>
              <p className="text-3xl bg-indigo-50 px-10 py-5 line-through rounded-3xl shadow-md border-4 border-zinc-300 ml-5">
                🚀 Update readme and commit.
              </p>
            </div>
          </li>
          <li className="w-full h-fit px-5">
            <div className="flex flex-row w-full h-full opacity-70">
              <span className="text-5xl bg-zinc-50 p-4 rounded-2xl shadow-lg border-4 border-zinc-300">
                ✅
              </span>
              <p className="text-3xl bg-indigo-50 px-10 py-5 line-through rounded-3xl shadow-md border-4 border-zinc-300 ml-5">
                🧠 Fix bug for scroll width.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default TaskitFront;

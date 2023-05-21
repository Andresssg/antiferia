
const Statistic = ({ type, data, text, position }) => {
  return (
    <div className={`flex ${position === 'left' ? 'justify-start border-gradient' : 'justify-end border-gradient-inverted'} p-8 
    sm:max-w-xl md:max-w-full 
    lg:max-w-screen-md my-2
    rounded-3xl md:mx-20`}>
      <div className="flex items-center gap-10 mx-10">
        {position === 'left' ?
          <>
            <div className="flex items-center gap-6">
              <div className="flex items-center justify-center rounded-full bg-indigo-50 sm:w-24 sm:h-24 xl:w-28 xl:h-28 w-16 h-16">
                <h3 className="text-4xl font-extrabold">
                  {type}
                </h3>
              </div>
              <h3 className="text-4xl font-extrabold sm:text-5xl xl:text-6xl text-white">
                {data}
              </h3>
            </div>
            <div className="lg:w-1/2">
              <p className="text-indigo-50 text-2xl font-medium">
                {text}
              </p>
            </div>
          </>
          : <>
            <div className="lg:w-1/2">
              <p className="text-indigo-50 text-2xl font-medium">
                {text}
              </p>
            </div>
            <div className="flex items-center gap-6">
              <h3 className="text-4xl font-extrabold sm:text-5xl xl:text-6xl text-white">
                {data}
              </h3>
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-indigo-50 sm:w-24 sm:h-24 xl:w-28 xl:h-28">
              <h3 className="text-4xl font-extrabold">
                  {type}
                </h3>
              </div>
            </div>

          </>}
      </div>
    </div>
  );
};

export default Statistic

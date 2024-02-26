export default function HeroCard(props) {
  return (
    <div className="flex flex-col justify-center  lg:flex-row relative gap-4 p-6  shadow-sm hover:bg-neutral-100 bg-white w-full min-h-max">
      {props.best ? (
        <div className="flex top-0 left-0 absolute px-2 py-1 gap-2 rounded-md bg-orange-500 text-white">
          <img src={props.bestList.icon} alt="icon" />
          <p>{props.bestList.best}</p>
        </div>
      ) : (
        ""
      )}
      <div className="absolute border-2 -left-5 top-16 text-gray-700 h-8 w-8 text-center  rounded-full border-gray-300">
        <p className="text-md">{props.index + 1}</p>
      </div>
      <div className=" w-full lg:w-1/5  flex flex-col justify-center items-center">
        <img className="h-32 w-32" src={props.img} alt="computer" />
        <p>{props.imgLabel}</p>
      </div>
      <div className="w-full lg:w-3/5 max-md:text-sm  gap-1 flex flex-col">
        <p className=" text-[#5C6874]">
          <span className=" font-semibold text-black">{props.name}- </span>
          {props.desc}
        </p>
        {props.offer ? (
          <p className="text-[#1B88F4] rounded-md bg-gray-100 p-1 max-w-max">
            {props.offerValue} Off
          </p>
        ) : (
          ""
        )}
        <p className="font-semibold">Main highlights</p>
        <div className="p-2  text-[#5C6874]">
          {props.mainHighlights ? (
            <p>
              [WhatYou Get]: <span>{props.main}</span>
              <span>{props.main}</span>
            </p>
          ) : (
            <div
              className=" bg-pink-100
            p-2 flex flex-col gap-2"
            >
              {props.main.map((item, index) => {
                return (
                  <div key={index} className="flex items-center gap-2">
                    <p className="bg-white py-[0.1rem] px-[0.2rem] rounded-md  text-[#1B88F4] ">
                      {item.value}
                    </p>
                    <p>{item.tag}</p>
                  </div>
                );
              })}
            </div>
          )}
        </div>
        {props.isLove ? (
          <div className="flex flex-col gap-2">
            <p>Why we love it</p>
            {props.love.map((item, index) => {
              return (
                <div key={index} className="flex items-center  gap-2">
                  <i className="text-[#1B88F4] fa-regular fa-circle-check"></i>
                  <p>{item}</p>
                </div>
              );
            })}
          </div>
        ) : (
          ""
        )}
        <div className="flex items-center gap-2  cursor-pointer text-[#1B88F4]">
          <p>Show more</p>
          <i className="fa-solid fa-chevron-down"></i>
        </div>
      </div>
      <div className="flex flex-col items-center justify-between w-full gap-5 lg:gap-0 lg:w-1/5">
        <div className="flex w-32 rounded-xl flex-col gap-2 items-center justify-center p-3 bg-[#F3F9FF] text-[#074786]">
          <p className="text-3xl font-semibold">{props.rating}</p>
          <p className="text-sm font-semibold">{props.grade}</p>
          <img src={props.star} alt="" />
        </div>
        <button className=" rounded-lg text-white px-4 py-2 w-full bg-[#1B88F4]">
          View
        </button>
      </div>
    </div>
  );
}

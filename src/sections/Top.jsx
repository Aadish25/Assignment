export default function Top() {
  return (
    <div className="border-2 border-black w-full">
      <div className="border-b-2 border-gray-200 py-8 ">
        <h1 className="text-[1.45rem] md:text-4xl xl:text-[3.5rem]">
          Best Website builders in the US
        </h1>
      </div>
      <div className="text-xs md:text-sm xl:text-base flex py-2  items-center  justify-between">
        <div className="flex items-center gap-2">
          <i className="fa-regular fa-circle-check"></i>
          <p>Last Updated - February 22, 2020</p>
          <i className="fa-solid fa-circle-info"></i>
          <p>Advertising Disclosure</p>
        </div>
        <div className="flex cursor-pointer items-center gap-2">
          <p>Top Relevant</p>
          <i className="fa-solid fa-chevron-down"></i>
        </div>
      </div>
    </div>
  );
}

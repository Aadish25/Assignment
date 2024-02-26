export default function DealCard(props) {
  const discountedPrice =
    Number(props.price) - (Number(props.price) * Number(props.offer)) / 100;
  return (
    <div className="flex flex-col gap-1 shadow-lg bg-white px-2 py-3 rounded-md">
      <div className="flex justify-center">
        <img className="h-64 w-64" src={props.img} alt="computer" />
      </div>
      <div className="flex gap-2 text-[#1B88F4] text-xs">
        <p className="bg-[#F2F4F7] p-1">{props.offer}% Off</p>
        <p className="bg-[#F2F4F7] p-1">{props.duration}</p>
      </div>
      <p className="text-[#626E79] text-xl font-semibold text-center">
        {props.title}
      </p>
      <p className="text-lg text-[#626E79] max-w-xs">{props.name}</p>
      <div className="flex items-center gap-3">
        <p className="text-lg text-[#626E79]">${discountedPrice}</p>
        <p className="mt-3 text-[#9FA9B3]">${props.price}</p>
        <p className="mt-3 text-sm text-[#EF4C5D]">({props.offer}% Off)</p>
      </div>
    </div>
  );
}

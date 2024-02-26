import { computer } from "../assets";
import DealCard from "../components/DealCard";
export default function RelatedDeals() {
  const productDetail = [
    {
      img: computer,
      offer: "20",
      duration: "Limited time",
      title: "Web builder1",
      name: "Computer  Modern classic with wix support",
      price: "49.96",
    },
    {
      img: computer,
      offer: "20",
      duration: "Limited time",
      title: "Web builder1",
      name: "Computer  Modern classic with wix support",
      price: "49.96",
    },
    {
      img: computer,
      offer: "20",
      duration: "Limited time",
      title: "Web builder1",
      name: "Computer  Modern classic with wix support",
      price: "49.96",
    },
  ];
  const deals = productDetail.map((item, index) => {
    return <DealCard key={index} {...item} />;
  });
  return (
    <div className="flex flex-col w-full min-h-max mt-6">
      <h1 className=" text-2xl md:text-4xl text-[#2C384A] ">
        Related deals you might like for
      </h1>
      <div className="flex max-lg:justify-center gap-10 mt-8 lg:mt-16 flex-wrap">{deals}</div>
    </div>
  );
}

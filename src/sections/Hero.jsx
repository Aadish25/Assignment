import {
  fourHalfStar,
  fourStar,
  fiveStar,
  computer,
  diamond,
  trophy,
} from "../assets/index";
import HeroCard from "../components/HeroCard";
export default function Hero() {
  const optionsList = [
    "Tools",
    "AWS Builder",
    "Start Build",
    "Build Supplies",
    "Tooling",
    "BlueHosting",
  ];
  const options = optionsList.map((item, index) => {
    return (
      <div key={index} className=" cursor-pointer text-xs md:text-base bg-white p-2 md:p-3 text-gray-500 rounded-lg">
        {item}
      </div>
    );
  });
  const pathList = [
    "Home",
    "Hosting for all",
    "Hosting",
    "Hosting6",
    "Hosting5",
  ];
  const path = pathList.map((item, index) => {
    return (
      <div
        className="text-xs md:text-sm flex items-center gap-2 lg:gap-3 text-[#5C6874]"
        key={index}
      >
        <p>{item}</p>
        {index == pathList.length - 1 ? (
          ""
        ) : (
          <i className="fa-solid fa-chevron-right"></i>
        )}
      </div>
    );
  });
  const cardData = [
    {
      best: true,
      bestList: {
        icon: trophy,
        best: "Best Choice",
      },
      img: computer,
      imgLabel: "Builder 1",
      name: "WixPro 72-Inch Responsive Website Builder",
      desc: "Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
      offer: false,
      offerValue: "",
      mainHighlights: true,
      isLove: false,
      main: "Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
      rating: "9.8",
      grade: "Exceptional",
      star: fiveStar,
    },
    {
      best: true,
      bestList: {
        icon: diamond,
        best: "Best Value",
      },
      img: computer,
      imgLabel: "Builder",
      name: "SiteCraft 68-Inch Ultimate Web Design Studio",
      desc: "Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)",
      offer: false,
      offerValue: "",
      mainHighlights: true,
      isLove: false,
      main: "Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations.",
      rating: "9.5",
      grade: "Excellent",
      star: fourHalfStar,
    },
    {
      best: false,
      bestList: {
        icon: "",
        best: "",
      },
      img: computer,
      imgLabel: "Builder 1",
      name: "WixPro 72-Inch Responsive Website Builder",
      desc: "Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
      offer: false,
      offerValue: "",
      mainHighlights: true,
      isLove: false,
      main: "Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
      rating: "9.3",
      grade: "Exceptional",
      star: fiveStar,
    },
    {
      best: false,
      bestList: {
        icon: "",
        best: "",
      },
      img: computer,
      imgLabel: "CDK",
      name: "CDK Responsive Builder",
      desc: "An extensive library of widgets and apps, and detailed step-by-step guides",
      offer: true,
      offerValue: "26%",
      mainHighlights: false,
      isLove: true,
      main: [
        {
          value: "9.9",
          tag: "Building Responsive",
        },
        {
          value: "8.9",
          tag: "Cool",
        },
        {
          value: "8.9",
          tag: "Docs",
        },
      ],
      love: ["Documentation", "Easy Use", "Out of Box"],
      rating: "9.1",
      grade: "Very Good",
      star: fourStar,
    },
  ];
  const heroCard = cardData.map((item, index) => {
    return <HeroCard key={index} index={index} {...item} />;
  });
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-wrap xl:gap-16 items-center">{options}</div>
      <div className="flex flex-wrap items-center gap-1 lg:gap-4 mt-2">
        {path}
      </div>
      <div className="flex flex-col gap-4 mt-6">{heroCard}</div>
    </div>
  );
}

export default function Footer() {
  const categories = [
    "Web Builder",
    "Hosting",
    "Data Center",
    "Robotic-Automation",
  ];
  const contact = [
    "Contact",
    "Privacy Policy",
    "Terms Of Service",
    "Categories",
    "About",
  ];
  return (
    <div className="bg-[#212731] mt-8 text-white w-full  p-6">
      <div className="flex flex-wrap  gap-6 justify-evenly sm:flex-row">
        <div className="flex flex-col items-center gap-3">
          <h1 className="text-xl">CATEGORIES</h1>
          {categories.map((item, index) => {
            return (
              <p className="text-sm" key={index}>
                {item}
              </p>
            );
          })}
        </div>
        <div className="flex flex-col items-center gap-3">
          <h1 className="text-lg">CONTACT</h1>
          {contact.map((item, index) => {
            return (
              <p className="text-sm" key={index}>
                {item}
              </p>
            );
          })}
        </div>
        <div className="flex items-center gap-1">
          <p>United States</p>
          <i className="fa-solid fa-chevron-down"></i>
        </div>
      </div>
    </div>
  );
}

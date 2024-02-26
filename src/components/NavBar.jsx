export default function NavBar() {
  return (
    <div className="bg-nav ">
      <div className="flex gap-8 justify-center items-center w-full py-2">
        <div className="bg-white px-2 rounded-lg flex items-center gap-2">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input className="rounded-lg py-1 px-2" type="text"></input>
        </div>
        <ul className="hidden md:flex text-sm text-white md:gap-8">
          <li>Categories</li>
          <li>Website Builders</li>
          <li>Today&apos;s deals</li>
        </ul>
      </div>
    </div>
  );
}

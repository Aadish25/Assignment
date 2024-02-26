export default function Contact() {
  return (
    <div className="flex  flex-col md:flex-row mt-12 max-lg:gap-6 max-lg:text-center  justify-between items-center w-full ">
      <h1 className="text-[#5C6874] text-2xl w-full lg:max-w-sm">
        Sign up and get exclusive special deals
      </h1>
      <div className="flex bg-[#1B88F4]  shadow-xl shadow-blue-300">
        <input className="py-1 px-2" type="text"></input>
        <button className="text-white px-2">Sign Up</button>
      </div>
    </div>
  );
}

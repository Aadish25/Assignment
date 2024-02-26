import NavBar from "./components/NavBar";
import RelatedDeals from "./sections/RelatedDeals";
import Hero from "./sections/Hero";
import Top from "./sections/Top";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
export default function App() {
  return (
    <div>
      <NavBar />
      <section>
        <div className=" px-6 xl:padding-x">
          <Top />
        </div>
        <div className="px-6 xl:padding-x">
          <Hero />
        </div>
        <div className="px-6 xl:padding-x">
          <RelatedDeals />
        </div>
        <div className="px-6 xl:padding-x">
          <Contact />
        </div>
        <div className="px-6 xl:padding-x">
          <Footer />
        </div>
      </section>
    </div>
  );
}

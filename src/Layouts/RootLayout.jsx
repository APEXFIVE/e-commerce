import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../pages/about/Hero";
import List from "../pages/home/List";
import Vid from "../pages/home/components/Vid";
import Plan from "../pages/home/components/Plan";


const RootLayout = ({children, headerText}) => {
  return (
    <div>
      <Navbar />
     <h1>{headerText}</h1>
      <div>{children}</div>
      <Hero />
      <List />
      <Vid />
      <Plan />
      <Footer />
    </div>
  );
};
export default RootLayout;
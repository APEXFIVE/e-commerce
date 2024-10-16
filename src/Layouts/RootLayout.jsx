import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const RootLayout = ({children, headerText}) => {
  return (
    <div>
      <Navbar />
     <h1>Welcome{headerText}</h1>
      <div>{children}</div>

      <Footer />
    </div>
  );
};
export default RootLayout;
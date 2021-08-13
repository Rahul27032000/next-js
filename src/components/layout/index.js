import Footer from "../footer";
import Header from "../header";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="bg-red-600 min-h-70vh">{children}</div>

      <Footer />
    </div>
  );
};

export default Layout;

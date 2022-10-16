import Footer from "./Footer";
import Nav from "./Nav";

const Layout = ({ children }) => {
  return (
    <div id="page-container">
      <div id="content-wrap">
        <Nav />
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;

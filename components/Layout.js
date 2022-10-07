import Footer from "./Footer";
import Nav from "./Nav";

const Layout = ({ children }) => {
  return (
    <div id="page-container">
      <div id="content-wrap">
        <Nav />
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;

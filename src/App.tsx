import { FC } from "react";

import "antd/dist/reset.css";
import "./App.css";

import { ConfigProvider } from "antd";
import Jumbotron from "./components/Jumbotron";
import Discount from "./components/Discount";
import Profile from "./components/Profile";
import Products from "./components/Products";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App: FC = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#484C55",
          // colorDanger: "#BC412C",
          fontFamily: "-apple-system",
        },
      }}
    >
      <Jumbotron />
      <Discount />
      <Profile />
      <Products />
      <Contact />
      <Footer />
    </ConfigProvider>
  );
};

export default App;

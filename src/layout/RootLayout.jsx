import GetTheDrop from "@/components/getTheDrop/GetTheDrop";
import Home from "@/pages/Home/Home";
import Header from "./Header";
import useSmoother from "@/hooks/useSmoother";
import Footer from './Footer'
import {Outlet, Route, Routes} from 'react-router-dom';
import About from "../pages/About/About";

function RootLayout() {
  useSmoother();

  return (
    <>
      <Header />
      <GetTheDrop />
      <div id="scroll-container" style={{ height: "100vh", width: "100vw" }}>
        <main>
          <Outlet />
        </main>
        <Footer/>
      </div>
      
    </>
  );
}

export default RootLayout;

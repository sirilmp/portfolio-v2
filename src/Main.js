import React from "react";
import Nav from "./components/Nav";
import { useSelector } from 'react-redux'
import Home from "./pages/Home";
import SocialLinks from "./components/SocialLinks";
import Test from "./pages/Test";
import Email from "./components/Email";
import About from "./components/About";
import Work from "./components/Work";

function Main() {

  const blur_background = useSelector(state => state.background_blur.value)

  return (
    <>
      <Nav />

      <div className={`mt-14 ${blur_background && "blur-body-bg"}`} >
        <div className='fixed bottom-0 left-0'>
          <SocialLinks />
        </div>
        <div className='fixed bottom-0 right-0'>
        <Email/>
      </div>
      <div className='px-10 md:px-24'>
      <Home />
        <About/>
        <Work/>
        <Test/>
      </div>
 
      </div>
    </>
  );
}

export default Main;

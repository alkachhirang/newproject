import './App.css';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Creating from './components/Creating';
import Discover from './components/Discover';
import Footer from './components/Footer';
import Gallary from './components/Gallary';
import Header from './components/Header';
import Interior from './components/Interior';
import Newsletter from './components/Newsletter';
import SatisfiedClient from './components/SatisfiedClient';
import Welcome from './components/Welcome';
import React, { useState, useEffect } from 'react';
import Backtotop from './assets/images/png/bacltotop.png';
import { Preloader } from './components/IconImg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Aos from 'aos';

function App() {
  useEffect(() => {
    AOS.init(
      {
        once: true,
        duration: 1000,
      }
    );
    Aos.refresh()
  });
  const top = () => {
    document.documentElement.scrollTop = 0;
  };
  const [backToTop, setbackToTop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop > 300) {
        setbackToTop(true);
      } else {
        setbackToTop(false);
      }
    });
  }, []);
  const [screenLoading, setScreenLoading] = useState(false);
  useEffect(() => {
    setScreenLoading(true);
    setTimeout(() => {
      setScreenLoading(false);
    }, 2500);
  }, []);
  return (

    <div>
      {screenLoading ? (
        <Preloader />
      ) : (
        <BrowserRouter>
          <>
            <div className='overflow-x-hidden'>
              <Header />
                <Welcome />
                <Interior />
              <Gallary />
              <SatisfiedClient />
              <Discover />
              <Creating />
              <Newsletter />
              <Footer />
              <div>
                <img onClick={() => top()} src={Backtotop} alt='Backtotop' className={backToTop ? "Back-to_top max-w-[45px] z-[4]" : "d-none"} />
              </div>
            </div>
          </>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;

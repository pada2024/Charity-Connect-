import './App.css';
import Nav from './components/NavTabs';
import { Outlet } from 'react-router-dom';
import React from 'react';
import Footer from './components/Footer';
import { useLocation } from "react-router-dom";
import SocialLinks from './components/SocialLinks';


function App() {
  const currentPage = useLocation().pathname;
  return (
    <div>
      <Nav />
      <main className="mx-3">
        <Outlet />
      </main>
      <Footer />
      <SocialLinks />
      <p>Charity Connect</p>
      <p>Copyright &copy; {new Date().getFullYear()} Parisa React Portfolio</p>


    </div>
  );
}
export default App;




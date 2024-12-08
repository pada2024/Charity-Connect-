import './App.css';
import Login from './components/Login';
import Nav from './components/NavTabs';
import { Outlet } from 'react-router-dom';
import React, { useState } from 'react'; 
import Footer from './components/Footer';
import { useLocation } from "react-router-dom";
import SocialLinks from './components/SocialLinks';
import FoodDonationModal from './FoodDonationModal'; 

function App() {
  const currentPage = useLocation().pathname;
  const [isModalOpen, setIsModalOpen] = useState(false); // modal's state

  const openModal = () => setIsModalOpen(true); // open modal
  const closeModal = () => setIsModalOpen(false); // close modal

  return (
    <div>
      <Nav />
      <main className="mx-3">
        <Outlet />
        <button onClick={openModal} className="donate-button">Donate Food</button> {/* Button to open modal */}
      </main>
      <Footer />
      <SocialLinks />
      <p>Charity Connect</p>
      <p>Copyright &copy; {new Date().getFullYear()} Parisa React Portfolio</p>

      {/* Render the Food Donation Modal */}
      <FoodDonationModal isOpen={isModalOpen} onRequestClose={closeModal} />
    </div>
  );
}

export default App;
import React, { useState } from "react";
import Login from "./Login";
import Navbar from "./Navbar";
import Homepage from './Homepage';
import Footer from './Footer';

const MainPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  
  return (
    <div>
      <Navbar openModal={openModal} />
      <Homepage />
      <Footer />

      <Login isOpen={isModalOpen} onClose={closeModal}/>
    </div>
  );
};

export default MainPage;

import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Set the app element for accessibility

const FoodDonationModal = ({ isOpen, onRequestClose }) => {
  const [foodType, setFoodType] = useState('');
  const [quantity, setQuantity] = useState('');
  const [instructions, setInstructions] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the food donation submission logic here
    console.log({ foodType, quantity, instructions });
    // Reset form fields
    setFoodType('');
    setQuantity('');
    setInstructions('');
    onRequestClose(); // Close the modal after submission
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <h2>Food Donation</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Food Type:
            <input
              type="text"
              value={foodType}
              onChange={(e) => setFoodType(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Quantity:
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Special Instructions:
            <textarea
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
            />
          </label>
        </div>
        <button type="submit">Submit Donation</button>
        <button type="button" onClick={onRequestClose}>Cancel</button>
      </form>
    </Modal>
  );
};

export default FoodDonationModal;
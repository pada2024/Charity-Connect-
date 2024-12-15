// export default function Donations() {
    
// }
    
import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap'; 

export default function Donations() {
    const [showModal, setShowModal] = useState(false);

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    return (
        <div>
            <h1>Food Donations</h1>
            <Button variant="primary" onClick={handleShow}>
                Donate Food
            </Button>

            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Food Donation</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div className="form-group">
                            <label htmlFor="foodItem">Food Item</label>
                            <input type="text" className="form-control" id="foodItem" placeholder="Enter food item" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="quantity">Quantity</label>
                            <input type="number" className="form-control" id="quantity" placeholder="Enter quantity" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="location">Location</label>
                            <input type="text" className="form-control" id="location" placeholder="Enter your location" />
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => { /* Handle donation submission */ handleClose(); }}>
                        Submit Donation
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
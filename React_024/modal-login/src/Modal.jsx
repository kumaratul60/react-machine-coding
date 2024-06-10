import { useState } from "react";

// eslint-disable-next-line react/prop-types
const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal">
                <div className="modal-content">
                    {children}
                </div>
                <button className="modal-close-btn" onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

const ModalApp = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <button onClick={toggleModal}>Open Modal</button>
            <Modal isOpen={isOpen} onClose={toggleModal}>
                <h2>This is a Modal</h2>
                <p>You can put any content here.</p>
            </Modal>
        </div>
    );
};

export default ModalApp;
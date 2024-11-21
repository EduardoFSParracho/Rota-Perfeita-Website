// ItineraryModal.js
import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";

function ItineraryModal({ itinerary }) {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <Button onClick={toggleModal} color="primary">
        Ver Detalhes do Itinerário
      </Button>
      <Modal isOpen={showModal} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>
          Itinerário para {itinerary.city}
        </ModalHeader>
        <ModalBody>
          {itinerary.days.map((day, index) => (
            <div key={index}>
              <h4>Dia {day.day}</h4>
              <ul>
                {day.activities.map((activity, idx) => (
                  <li key={idx}>{activity}</li>
                ))}
              </ul>
            </div>
          ))}
        </ModalBody>
      </Modal>
    </>
  );
}

export default ItineraryModal;

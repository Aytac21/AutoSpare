import React, { useState } from "react";
import LoginPhoneNumber from "../components/Logins/LoginPhoneNumber";
import LoginEmail from "../components/Logins/LoginEmail";
import FinishingSignup from "../components/Logins/FinishingSignup";

export default function Home() {
  const [showPhoneNumberModal, setShowPhoneNumberModal] = useState(false);
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [showFinishingSignup, setShowFinishingSignup] = useState(false);

  const openPhoneNumberModal = () => {
    setShowPhoneNumberModal(true);
  };

  const closePhoneNumberModal = () => {
    setShowPhoneNumberModal(false);
  };

  const openEmailModal = () => {
    setShowEmailModal(true);
  };

  const closeEmailModal = () => {
    setShowEmailModal(false);
  };
  const openFinishingSignup = () => {
    setShowFinishingSignup(true);
  };

  const closeFinishingSignup = () => {
    setShowFinishingSignup(false);
  };

  return (
    <div className="home">
      {!showPhoneNumberModal && !showEmailModal && (
        <button onClick={openPhoneNumberModal}>Home</button>
      )}
      {showPhoneNumberModal && (
        <div className="modal">
          <div className="modal-content">
            <LoginPhoneNumber
              onClose={closePhoneNumberModal}
              onOpenEmailModal={openEmailModal}
            />
          </div>
        </div>
      )}
      {showEmailModal && (
        <div className="modal">
          <div className="modal-content">
            <LoginEmail
              onClose={closeEmailModal}
              onOpenFinishingSignup={openFinishingSignup}
            />
          </div>
        </div>
      )}
      {showFinishingSignup && (
        <div className="modal">
          <div className="modal-content">
            <FinishingSignup onClose={closeFinishingSignup} />
          </div>
        </div>
      )}
    </div>
  );
}

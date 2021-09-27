import React, { useRef, useEffect, useCallback } from "react";
import styled from "styled-components";
import { MdClose } from "react-icons/md";

const Background = styled.div`
  width: 32%;
  height: 90%;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: fadeIn linear 0.15s;
  @media screen and (max-width: 768px) {
    min-width: 90%;
    min-height: 90%;
  }

  @keyframes fadeIn {
    0% {opacity:0;}
    100% {opacity:1;}
  }
  
`;



const ModalWrapper = styled.div`

  width: 90%;
  height: 300px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: grid;
  position: relative;
  z-index: 10;
  border-radius: 10px;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;
  p {
    margin-bottom: 1rem;
  }
  button {
    padding: 14px 24px;
    background: #f55;
    color: #000;
    border: none;
    margin-top: 1rem;
    border-radius: 25px;
    cursor: pointer;
    text-transform: capitalize;
    font-weight: 600;
    transition: all 0.2s ease-out;
    :hover{
        background: #f50;
        transition: all 0.2s ease-out;
        color: #ededed
    }
  }
`;

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;

const EditInput = styled.input`
  padding: 14px 32px 14px 16px;
  border-radius: 15px;
  border: 2px solid #eee;
  outline: none;
  width: 60%;
  color: #000;

  @media screen and (max-width: 980px) {
    width: 240px;
  }
  ::placeholder {
    color: #727272;
  }
`;

const Modal = ({ showModal, setShowModal }) => {
  const modalRef = useRef();

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showModal) {
        setShowModal(false);
        console.log("I pressed");
      }
    },
    [setShowModal, showModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  return (
    <>
      {showModal ? (
        <Background onClick={closeModal} ref={modalRef}>
          <ModalWrapper showModal={showModal}>
            <ModalContent>
 
              <EditInput placeholder="zz" />
              <button>Save Changes</button>
            </ModalContent>
            <CloseModalButton
              aria-label="Close modal"
              onClick={() => setShowModal((prev) => !prev)}
            />
          </ModalWrapper>
        </Background>
      ) : null}
    </>
  );
};

export default Modal;

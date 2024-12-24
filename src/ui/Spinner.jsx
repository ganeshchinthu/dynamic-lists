import styled, { keyframes } from "styled-components";

const rotate = keyframes` 
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(2turn);
    } 
`;

const SpinnerAnimation = styled.div`
  width: 5rem;
  height: 5rem;
  border: 5px solid var(--primary-button-color);
  border-left-color: transparent;
  border-right-color: transparent;

  border-radius: 50%;
  animation: ${rotate} 0.9s ease-in-out infinite;

  position: fixed;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);
  z-index: 999;
`;

function Spinner() {
  return <SpinnerAnimation />;
}

export default Spinner;

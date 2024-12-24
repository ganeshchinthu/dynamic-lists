import styled from "styled-components";

const StyledButton = styled.button`
  border: none;
  padding: 1rem 1.5rem;
  font-size: 1.7rem;
  border-radius: 10px;
  background-color: var(--primary-button-color);
  color: white;
  transition: all 0.2s ease-in;
  cursor: pointer;

  &:hover {
    background-color: var(--primary-button-color-dark);
  }

  @media (max-height: 582px) or (max-width: 710px) {
    padding: 0.4rem 0.8rem;
    font-size: 1.4rem;
    border-radius: 5px;
  }

  @media (max-width: 400px) {
    padding: 0.2 0.4rem;
    font-size: 1.1rem;
    border-radius: 4px;
  }
`;

function Button({ children, onClick = () => {} }) {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
}

export default Button;

import styled from "styled-components";

const StyledParagraph = styled.p`
  color: red;
  font-size: 1.8rem;
`;

function Error({ children }) {
  return <StyledParagraph>{children}</StyledParagraph>;
}

export default Error;

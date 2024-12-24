import styled from "styled-components";

const StyledListsContainer = styled.div`
  width: 90vw;
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  overflow-x: auto;

  align-self: flex-start;
  gap: 3rem;

  @media (max-width: 1200px) {
    gap: 1.45rem;
  }
`;

function ListsContainer({ children }) {
  return <StyledListsContainer>{children}</StyledListsContainer>;
}

export default ListsContainer;

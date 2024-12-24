import styled from "styled-components";

const StyledListItem = styled.li`
  width: 90%;
  display: flex;
  padding: 2rem;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.15);
  border: 1.5px solid #a4a0a094;
  border-radius: 10px;
`;

function ListItem({ item }) {
  return (
    <StyledListItem>
      <h3>{item.name}</h3>
      <p style={{ color: "grey" }}>{item.description}</p>
      {/* <span style={{ fontSize: "2rem", fontWeight: "bold" }}>&rarr;</span> */}
    </StyledListItem>
  );
}

export default ListItem;

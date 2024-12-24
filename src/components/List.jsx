import styled from "styled-components";
import ListItem from "./ListItem";
import { useState } from "react";
import useList from "../context/ListContext";

const StyledList = styled.ul`
  height: 90%;
  width: 25rem;
  padding: 1.5rem;
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  gap: 1rem;

  overflow: auto;
  list-style: none;

  font-size: 1.1rem;

  @media (max-height: 582px) or (max-width: 710px) {
    font-size: 0.9rem;
    width: 22rem;
  }
`;

const Checkbox = styled.input`
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 1rem;

  @media (max-height: 582px) or (max-width: 710px) {
    width: 1.3rem;
  }
`;

const ListNum = styled.span`
  font-size: 1.4rem;
  font-weight: bold;

  @media (max-height: 582px) or (max-width: 710px) {
    font-size: 1.2rem;
  }
`;

function List({ list }) {
  const [checked, setChecked] = useState(false);
  const { createCheckedList, checkedLists } = useList();

  function handleCheck(e) {
    if (e.target.value === "false") {
      createCheckedList([...checkedLists, list]);
      setChecked(true);
    } else {
      const filtered = checkedLists.filter(
        (exList) => exList[0].list_number !== list[0].list_number
      );
      createCheckedList(filtered);
      setChecked(false);
    }
  }

  return (
    <StyledList>
      <li
        style={{
          padding: "1.5rem",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Checkbox type="checkbox" value={checked} onChange={handleCheck} />
        <ListNum>List {list[0]?.list_number}</ListNum>
      </li>

      {list.map((item) => (
        <ListItem item={item} key={item.id} />
      ))}
    </StyledList>
  );
}

export default List;

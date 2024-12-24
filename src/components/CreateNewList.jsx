import styled from "styled-components";
import Button from "../ui/Button";
import { useState } from "react";
import useList from "../context/ListContext";
import sortLists from "../util/sortLists";

const Container = styled.div`
  width: 100vmin;
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  gap: 4rem;

  @media (max-height: 582px) or (max-width: 710px) {
    gap: 2rem;
  }

  @media (max-width: 400px) or (max-height: 400px) {
    width: 95vw;
  }
`;

const StyledListsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 3rem;

  @media (max-height: 582px) or (max-width: 710px) {
    gap: 1rem;
  }

  @media (max-width: 400px) {
    gap: 0;
  }
`;

const StyledList = styled.ul`
  width: 32%;
  height: 80vh;
  padding: 1.5rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  overflow: auto;
  list-style: none;

  font-size: 1.3rem;

  @media (max-height: 582px) or (max-width: 710px) {
    font-size: 0.9rem;
    padding: 1.2rem;
  }

  @media (max-width: 400px) {
    width: 20rem;
    font-size: 0.6rem;
    padding: 0.7rem;
  }
`;

const StyledListItem = styled.li`
  width: 100%;
  display: flex;
  padding: 2rem;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.15);
  border: 1.5px solid #a4a0a094;
  border-radius: 10px;
  gap: 1rem;

  @media (max-height: 582px) or (max-width: 710px) {
    padding: 1rem;
    gap: 0.4rem;
  }

  @media (max-width: 400px) {
    padding: 0.5rem;
    border-radius: 5px;
    gap: 0.2rem;
    flex-shrink: 0;
  }
`;

const BtnsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: ${(props) => props?.$position};
  gap: ${(props) => props.$position === "flex-end" && "2rem"};

  @media (max-height: 582px) or (max-width: 710px) {
    width: 100%;
    margin-left: ${(props) => props?.$marginLeft};
  }
`;

const Image = styled.img`
  width: 2.7rem;

  @media (max-height: 582px) or (max-width: 710px) {
    width: 1.7rem;
  }

  @media (max-width: 400px) {
    width: 0.9rem;
  }
`;

const BtnArrow = styled.button`
  border: none;
  align-self: ${(props) => props.$position};
  cursor: pointer;
  background-color: transparent;
`;

const BtnCancel = styled.button`
  border: 2px solid black;
  padding: 1rem 1.5rem;
  font-size: 1.7rem;
  border-radius: 10px;
  cursor: pointer;

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

function LeftList({ list, setLeftList, setNewList }) {
  function handleClick(item) {
    setNewList((state) => [...state, item]);
    setLeftList((state) => {
      return state.filter((liItem) => liItem.id !== item.id);
    });
  }

  return (
    <StyledList>
      <li>
        <h3>
          List {list[0]?.list_number} ({list.length})
        </h3>
      </li>
      {list.map((item) => (
        <StyledListItem key={item.id}>
          <h3>{item.name}</h3>
          <p style={{ color: "grey" }}>{item.description}</p>
          <BtnArrow $position="flex-end" onClick={() => handleClick(item)}>
            <Image src="right-arrow.svg" alt="arrow right" />
          </BtnArrow>
        </StyledListItem>
      ))}
    </StyledList>
  );
}

function NewList({ list, setNewList, setRightList, setLeftList, totalLists }) {
  function handleLeftClick(item) {
    setNewList((state) => state.filter((liItem) => liItem.id !== item.id));
    setLeftList((state) => [...state, item]);
  }

  function handleRightClick(item) {
    setNewList((state) => state.filter((liItem) => liItem.id !== item.id));
    setRightList((state) => [...state, item]);
  }

  return (
    <StyledList>
      <li>
        <h3>
          List {totalLists + 1} ({list.length})
        </h3>
      </li>
      {list.map((item) => (
        <StyledListItem key={item.id}>
          <h3>{item.name}</h3>
          <p style={{ color: "grey" }}>{item.description}</p>
          <BtnsContainer $position="space-between" $marginLeft="0">
            <BtnArrow onClick={() => handleLeftClick(item)}>
              <Image src="left-arrow.svg" alt="arrow left" />
            </BtnArrow>
            <BtnArrow onClick={() => handleRightClick(item)}>
              <Image src="right-arrow.svg" alt="arrow right" />
            </BtnArrow>
          </BtnsContainer>
        </StyledListItem>
      ))}
    </StyledList>
  );
}

function RightList({ list, setRightList, setNewList }) {
  function handleClick(item) {
    setNewList((state) => [...state, item]);
    setRightList((state) => {
      return state.filter((liItem) => liItem.id !== item.id);
    });
  }
  return (
    <StyledList>
      <li>
        <h3>
          List {list[0]?.list_number} ({list.length})
        </h3>
      </li>
      {list.map((item) => (
        <StyledListItem key={item.id}>
          <h3>{item.name}</h3>
          <p style={{ color: "grey" }}>{item.description}</p>
          <BtnArrow $position="flex-end" onClick={() => handleClick(item)}>
            <Image src="left-arrow.svg" alt="arrow left" />
          </BtnArrow>
        </StyledListItem>
      ))}
    </StyledList>
  );
}

function CreateNewList({ totalLists }) {
  const { checkedLists, cancelUpdate, updateList, listData } = useList();

  const lists = sortLists(checkedLists);

  const leftListNum = lists[0][0].list_number;
  const rightListNum = lists[1][0].list_number;

  const [leftList, setLeftList] = useState(lists[0]);
  const [rightList, setRightList] = useState(lists[1]);
  const [newList, setNewList] = useState([]);

  function handleUpdate() {
    const updatedLeftList = leftList.map((liItem) => {
      liItem.list_number = leftListNum;
      return liItem;
    });
    const updatedRightList = rightList.map((liItem) => {
      liItem.list_number = rightListNum;
      return liItem;
    });
    const updatedNewList = newList.map((liItem) => {
      liItem.list_number = totalLists + 1;
      return liItem;
    });

    const newData = [
      ...updatedLeftList,
      ...updatedRightList,
      ...updatedNewList,
    ];

    const newUpdatedList = listData.map((liItem) => {
      const newItem = newData.find((item) => liItem.id === item.id);
      return newItem ? newItem : liItem;
    });

    updateList(newUpdatedList);
  }

  return (
    <Container>
      <StyledListsContainer>
        <LeftList
          list={leftList}
          setLeftList={setLeftList}
          setNewList={setNewList}
        />
        <NewList
          list={newList}
          setNewList={setNewList}
          setRightList={setRightList}
          setLeftList={setLeftList}
          totalLists={totalLists}
        />
        <RightList
          list={rightList}
          setRightList={setRightList}
          setNewList={setNewList}
        />
      </StyledListsContainer>

      <BtnsContainer $position="flex-end" $marginLeft="-4rem">
        <BtnCancel onClick={cancelUpdate}>Cancel</BtnCancel>
        <Button onClick={handleUpdate}>Update</Button>
      </BtnsContainer>
    </Container>
  );
}

export default CreateNewList;

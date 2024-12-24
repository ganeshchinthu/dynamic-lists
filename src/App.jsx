import Button from "./ui/Button";
import FetchError from "./components/FetchError";
import Spinner from "./ui/Spinner";
import groupData from "./util/groupData";
import ListsContainer from "./components/ListsContainer";
import List from "./components/List";
import GlobalStyles from "./GlobalStyles";
import CreateNewList from "./components/CreateNewList";
import styled from "styled-components";
import Error from "./ui/Error";
import useList from "./context/ListContext";
import sortLists from "./util/sortLists";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  @media (max-height: 582px) or (max-width: 710px) {
    gap: 1rem;
  }
`;

const MainHeading = styled.h1`
  font-size: 3rem;

  @media (max-height: 582px) or (max-width: 710px) {
    font-size: 2rem;
  }

  @media (max-width: 400px) {
    font-size: 1.5rem;
  }
`;

function App() {
  const { isLoading, error, isNewList, listData, createNewList } = useList();
  const groupedListsData = groupData(listData);

  if (isLoading) return <Spinner />;
  if (error.loadError) return <FetchError />;

  return (
    <Main>
      {!isNewList ? (
        <>
          <Header>
            <MainHeading>List Creation</MainHeading>
            <Button onClick={createNewList}>Create a new list</Button>
            {error.newListError && <Error>{error.newListError}</Error>}
          </Header>
          <ListsContainer>
            {sortLists(groupedListsData).map((list) => (
              <List list={list} key={list[0]?.list_number} />
            ))}
          </ListsContainer>{" "}
        </>
      ) : (
        <CreateNewList totalLists={groupedListsData.length} />
      )}
    </Main>
  );
}

export default App;

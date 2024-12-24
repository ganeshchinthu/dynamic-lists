import { createContext, useContext, useEffect, useReducer } from "react";
import { getListsData } from "../services/serveroperations";

const ListContext = createContext();

const intialState = {
  listData: [],
  isLoading: false,
  isNewList: false,
  error: {
    loadError: "",
    newListError: "",
  },
  checkedLists: [],
  refetch: 0,
};

function reducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    case "loading":
      return {
        ...state,
        isLoading: true,
      };

    case "listLoaded":
      return {
        ...state,
        listData: payload,
        isLoading: false,
        refetch: 0,
        error: { ...state.error, loadError: "" },
      };

    case "newList":
      return {
        ...state,
        isNewList: !state.isNewList,
      };

    case "checkedLists":
      return {
        ...state,
        checkedLists: payload,
      };

    case "error":
      return {
        ...state,
        isLoading: false,
        error: { ...state.error, ...payload },
      };

    case "cancelUpdate":
      return {
        ...state,
        checkedLists: [],
        isNewList: false,
      };

    case "updateList":
      return {
        ...state,
        listData: payload,
        checkedLists: [],
        isNewList: false,
      };

    case "refetchList":
      return {
        ...state,
        refetch: state.refetch + 1,
      };

    default:
      throw new Error("Unknow action type");
  }
}

function ListProvider({ children }) {
  const [
    { refetch, listData, isLoading, isNewList, error, checkedLists },
    dispatch,
  ] = useReducer(reducer, intialState);

  useEffect(() => {
    async function getData() {
      dispatch({ type: "loading" });
      try {
        const data = await getListsData();
        dispatch({ type: "listLoaded", payload: data.lists });
      } catch (err) {
        dispatch({
          type: "error",
          payload: { loadError: "Something went wrong" },
        });
      }
    }

    getData();
  }, [refetch]);

  function createNewList() {
    if (checkedLists.length > 2 || checkedLists.length < 2) {
      dispatch({
        type: "error",
        payload: {
          newListError:
            "*You should select exactly two lists to create a new list*",
        },
      });
      return;
    }

    dispatch({ type: "newList" });
    dispatch({
      type: "error",
      payload: {
        newListError: "",
      },
    });
  }

  function createCheckedList(data) {
    dispatch({ type: "checkedLists", payload: data });
  }

  function cancelUpdate() {
    dispatch({ type: "cancelUpdate" });
  }

  function updateList(data) {
    dispatch({ type: "updateList", payload: data });
  }

  function refetchData() {
    dispatch({ type: "refetchList" });
  }
  return (
    <ListContext.Provider
      value={{
        listData,
        isLoading,
        isNewList,
        error,
        checkedLists,
        createNewList,
        createCheckedList,
        cancelUpdate,
        updateList,
        refetchData,
      }}
    >
      {children}
    </ListContext.Provider>
  );
}

function useList() {
  const context = useContext(ListContext);

  if (!context) {
    throw new Error("List context used outside the list provider");
  }

  return context;
}

export default useList;
export { ListProvider };

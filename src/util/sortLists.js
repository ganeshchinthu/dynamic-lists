function sortLists(lists) {
  return lists.toSorted((list1, list2) => {
    return list1[0]?.list_number - list2[0]?.list_number;
  });
}

export default sortLists;

function groupData(data) {
  const groupedData = data.reduce((acc, item) => {
    // Check if a group already exists for the current list_number
    const groupIndex = acc.findIndex(
      (group) => group[0]?.list_number === item.list_number
    );

    if (groupIndex === -1) {
      // Create a new group if it doesn't exist
      acc.push([item]);
    } else {
      // Add the item to the existing group
      acc[groupIndex].push(item);
    }

    return acc;
  }, []);

  return groupedData;
}

export default groupData;

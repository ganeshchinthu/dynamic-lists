export async function getListsData() {
  const res = await fetch("https://apis.ccbp.in/list-creation/lists");
  const data = await res.json();

  return data;
}

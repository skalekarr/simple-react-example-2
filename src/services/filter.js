export default function getFilteredList(filterValue, items) {
  return items.filter((item) => {
      return item.toLowerCase().includes(filterValue);
  });
}

function sortOnCompare(a, b) {
  if (b > a) {
    return 1;
  } else if (b < a) {
    return -1;
  }

  return 0;
}


export default function getSortedList(items) {
  let a,b;

  return items.sort((a,b) => {
    a = a.toLowerCase();
    b = b.toLowerCase();

    return sortOnCompare(a,b)
  });
}

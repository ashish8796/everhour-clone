function filterData(arr, query) {
  return arr.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );
}

export { filterData };

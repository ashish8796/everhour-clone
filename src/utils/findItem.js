function findItem(id, arr) {
  console.log({ id, arr });
  return arr.find((item) => item.id === id);
}

export { findItem };

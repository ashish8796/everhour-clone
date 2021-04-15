export const loadData = (key) => {
  try {
    const data = localStorage.getItem(key);
    return JSON.parse(data);
  } catch {
    return undefined;
  }
};

export const saveData = (key, data) => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch {
    return undefined;
  }
};
